const Groq = require('groq-sdk');
require('dotenv').config();

exports.generateItinerary = async (req, res) => {
  const { destination, days, budget, interests } = req.body;

  if (!destination || !days || !budget) {
    return res.status(400).json({ message: 'Destination, days and budget are required' });
  }

  try {
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

    const prompt = `You are an expert Indian travel planner. Create a detailed ${days}-day travel itinerary for ${destination}, India.
Budget level: ${budget}
Interests: ${interests || 'General sightseeing, food, culture'}

Return ONLY a valid JSON object, no markdown, no code blocks:
{
  "destination": "${destination}",
  "days": ${days},
  "budget": "${budget}",
  "overview": "2-3 sentence overview",
  "tips": ["tip1", "tip2", "tip3"],
  "itinerary": [
    {
      "day": 1,
      "title": "Day title",
      "morning": {
        "activity": "Activity name",
        "description": "Details",
        "duration": "2 hours",
        "cost": "Rs.200"
      },
      "afternoon": {
        "activity": "Activity name",
        "description": "Details",
        "duration": "3 hours",
        "cost": "Rs.500"
      },
      "evening": {
        "activity": "Activity name",
        "description": "Details",
        "duration": "2 hours",
        "cost": "Rs.300"
      },
      "food": {
        "breakfast": "Recommendation",
        "lunch": "Recommendation",
        "dinner": "Recommendation"
      },
      "hotel": "Hotel recommendation",
      "estimatedCost": "Rs.2000"
    }
  ]
}`;

    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.7,
      max_tokens: 4000,
    });

    const rawText = completion.choices[0]?.message?.content || '';
    console.log('Groq raw response:', rawText.substring(0, 200));

    const cleaned = rawText
      .replace(/```json/g, '')
      .replace(/```/g, '')
      .trim();

    const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return res.status(500).json({ message: 'Failed to parse itinerary' });
    }

    const itinerary = JSON.parse(jsonMatch[0]);
    res.json({ success: true, itinerary });
  } catch (err) {
    console.error('Itinerary generation error:', err.message);
    res.status(500).json({ message: 'Failed to generate itinerary: ' + err.message });
  }
};

exports.planJourney = async (req, res) => {
  const { fromCity, toCity } = req.body;

  if (!fromCity || !toCity) {
    return res.status(400).json({ message: 'From city and to city are required' });
  }

  try {
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

    const prompt = `You are an expert Indian travel guide. Plan a complete step-by-step journey from ${fromCity} to ${toCity}, India.

Return ONLY a valid JSON object, no markdown, no code blocks:
{
  "from": "${fromCity}",
  "to": "${toCity}",
  "overview": "2-3 sentence summary of the journey",
  "totalTime": "estimated total travel time",
  "estimatedCost": "estimated cost range",
  "distance": "approximate distance",
  "bestRoute": [
    {
      "step": 1,
      "action": "What to do at this step",
      "details": "Detailed instructions",
      "duration": "time for this step",
      "cost": "cost for this step"
    }
  ],
  "transportOptions": [
    {
      "icon": "✈️",
      "mode": "Flight",
      "duration": "2 hours",
      "cost": "Rs.3000-8000",
      "availability": "Daily flights",
      "description": "Detailed description of this option"
    },
    {
      "icon": "🚂",
      "mode": "Train",
      "duration": "8 hours",
      "cost": "Rs.500-2000",
      "availability": "Multiple daily trains",
      "description": "Detailed description of this option"
    },
    {
      "icon": "🚌",
      "mode": "Bus",
      "duration": "10 hours",
      "cost": "Rs.300-800",
      "availability": "Regular buses",
      "description": "Detailed description of this option"
    }
  ],
  "tips": [
    "tip1",
    "tip2",
    "tip3"
  ]
}`;

    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.7,
      max_tokens: 3000,
    });

    const rawText = completion.choices[0]?.message?.content || '';

    const cleaned = rawText
      .replace(/```json/g, '')
      .replace(/```/g, '')
      .trim();

    const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return res.status(500).json({ message: 'Failed to parse journey plan' });
    }

    const journey = JSON.parse(jsonMatch[0]);
    res.json({ success: true, journey });
  } catch (err) {
    console.error('Journey planning error:', err.message);
    res.status(500).json({ message: 'Failed to plan journey: ' + err.message });
  }
};
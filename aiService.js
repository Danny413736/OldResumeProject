export async function generateResume(userData) {
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("Missing OpenAI API key. Make sure it's set in your .env file.");
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "You are a helpful assistant who helps users create a resume for general use. You will create a resume including the user's first and last name, gpa, birthday, email, educational status, previous work experience, work certificates, and skills. Do not repeat any information and make sure that all of the text is professional. Don't add any additional/unnecessary texts at the top or bottom of the resume." },
        { role: "user", content: `Generate a resume for: ${JSON.stringify(userData)}.
        If a section is missing, don't include it.
        You must Always generate a title for the user based on the information given to you. (example: Aspiring Programmer)
        Don't use any special characters.
        Don't bold any letters.
        Make the Resume as professional as possible on a pdf.
        Make the sections sectioned off by lines spanning the entire page.
        Make the bullet points consistent
        Don't make any large spaces.
        Don't add any additional facts without any information about them.
        Make all text centered on the page.
        Use the following instructions to create the resume:
        - Top-Middle: name, email, gpa, birthday, and title
        - Sections: education status, previous work experience, work certificates, and relevant skills` 
        }
      ]
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`OpenAI API error: ${error.error.message}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

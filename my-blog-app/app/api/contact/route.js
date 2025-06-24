export async function POST(request) {
  try {
    const { name, email, message } = await request.json();


    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields (name, email, message) are required' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    console.log('Contact Form Submission:', {
      name,
      email,
      message,
    });


    return new Response(
      JSON.stringify({ message: 'Message logged successfully' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
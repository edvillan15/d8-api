const stripeWebhook = async (ctx) => {
  try {
    const eventData = ctx.request.body; // Stripe event data sent in the request payload
    // Process the event data and perform the necessary actions (e.g., update your database, send a notification, etc.)
    console.log('Received webhook event:', eventData);
    // Respond with a 200 OK status to acknowledge receipt of the event
    ctx.send({ received: true });
  } catch (error) {
    // Handle errors, log them, or perform appropriate error handling
    console.error('Error processing webhook event:', error);
    ctx.badRequest(error);
  }
};

module.exports = {
  stripeWebhook,
};

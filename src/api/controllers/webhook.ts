// api/controllers/webhooks.ts

import { Context } from 'koa';

const stripeWebhook = async (ctx: Context): Promise<void> => {
  try {
    const requestBody = ctx.request.body; // Retrieve the data sent with the request
    // Process the webhook payload and perform the desired actions
    console.log('Received custom webhook:', requestBody);
    // Respond with a success message or any other appropriate response
    ctx.send({ received: true });
  } catch (error) {
    // Handle errors, log them, or perform appropriate error handling
    console.error('Error processing custom webhook:', error);
    ctx.badRequest(error);
  }
};

export default {
  stripeWebhook,
};

// config/customRoutes.ts

module.exports = {
  'POST /webhooks/stripe': 'webhooks.stripeWebhook',
  'GET /webhooks/stripe': 'webhooks.stripeWebhook'
};

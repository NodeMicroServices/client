const nextTranslate = require('next-translate');
const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = nextTranslate();

const SentryWebpackPluginOptions = {
    silent: true,
};

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);

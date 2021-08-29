const nextTranslate = require('next-translate');
const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = nextTranslate({
    webpackDevMiddleware: (config) => {
        const { watchOptions = {} } = config.watchOptions;
        config.watchOptions = { ...watchOptions, poll: 300 }
        return config;
    }
});

const SentryWebpackPluginOptions = {
    silent: true,
};

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);

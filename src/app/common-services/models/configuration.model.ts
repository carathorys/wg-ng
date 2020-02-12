import { AuthConfig, OAuthModuleConfig } from 'angular-oauth2-oidc';

export interface Configuration {
    title: string;
    version: string;
    production?: boolean;
    environment: string;
    apiEndpoint: string;
    oauthSettings: AuthConfig;
    oauth2ModuleSettings: OAuthModuleConfig;
}

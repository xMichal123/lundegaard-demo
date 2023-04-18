package sk.enlightening.my3dsite.configuration

import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.Customizer
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configurers.AuthorizeHttpRequestsConfigurer.AuthorizationManagerRequestMatcherRegistry
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer
import org.springframework.security.web.SecurityFilterChain
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter
import org.springframework.security.web.csrf.CookieCsrfTokenRepository
import org.springframework.security.web.csrf.CsrfTokenRequestAttributeHandler
import org.springframework.security.web.savedrequest.HttpSessionRequestCache
import org.springframework.security.web.savedrequest.RequestCache
import org.springframework.security.web.savedrequest.SimpleSavedRequest
import sk.enlightening.my3dsite.web.CookieCsrfFilter
import sk.enlightening.my3dsite.web.SpaWebFilter


@Configuration
class SecurityConfiguration {
    @Bean
    @Throws(Exception::class)
    fun filterChain(http: HttpSecurity): SecurityFilterChain {
        http
            .authorizeHttpRequests(
//                Customizer { authz: AuthorizationManagerRequestMatcherRegistry ->
//                    authz
//                        .requestMatchers(
//                            "/", "/index.html", "/static/**",
//                            "/*.ico", "/*.json", "/*.png", "/api/user"
//                        ).permitAll()
//                        .anyRequest().authenticated()
//                }
            )
            .requestMatchers("/", "/index.html", "/static/**",
                            "/*.ico", "/*.json", "/*.png", "/api/user").permitAll()
            .anyRequest().authenticated()
            .and()
            .csrf { csrf: CsrfConfigurer<HttpSecurity?> ->
                csrf
                    .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                    .csrfTokenRequestHandler(CsrfTokenRequestAttributeHandler())
            }
            .addFilterAfter(CookieCsrfFilter(), BasicAuthenticationFilter::class.java)
            .addFilterAfter(SpaWebFilter(), BasicAuthenticationFilter::class.java)
            .oauth2Login()
        return http.build()
    }

    @Bean
    fun refererRequestCache(): RequestCache {
        return object : HttpSessionRequestCache() {
            override fun saveRequest(request: HttpServletRequest, response: HttpServletResponse) {
                var referrer = request.getHeader("referer")
                if (referrer == null) {
                    referrer = request.requestURL.toString()
                }
                request.session.setAttribute(
                    "SPRING_SECURITY_SAVED_REQUEST",
                    SimpleSavedRequest(referrer)
                )
            }
        }
    }
}
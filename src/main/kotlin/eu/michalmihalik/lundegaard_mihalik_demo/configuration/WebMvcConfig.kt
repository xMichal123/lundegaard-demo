package eu.michalmihalik.lundegaard_mihalik_demo.configuration

import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer


@Configuration
class WebMvcConfig : WebMvcConfigurer {
    override fun addResourceHandlers(registry: ResourceHandlerRegistry) {
        // Serve static resources (e.g., your React app's built files)
        registry.addResourceHandler("/**")
            .addResourceLocations("classpath:/static/") // Adjust the path as needed
            .resourceChain(true)
    }
}


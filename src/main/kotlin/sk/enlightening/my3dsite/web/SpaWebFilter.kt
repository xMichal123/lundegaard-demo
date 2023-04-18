package sk.enlightening.my3dsite.web

import jakarta.servlet.FilterChain
import jakarta.servlet.ServletException
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.filter.OncePerRequestFilter
import java.io.IOException


class SpaWebFilter : OncePerRequestFilter() {
    @Throws(ServletException::class, IOException::class)
    override fun doFilterInternal(
        request: HttpServletRequest, response: HttpServletResponse,
        filterChain: FilterChain
    ) {
        val path = request.requestURI
        val user = SecurityContextHolder.getContext().authentication
        if (user != null && !path.startsWith("/api") && !path.contains(".") && path.matches("/(.*)".toRegex())) {
            request.getRequestDispatcher("/").forward(request, response)
            return
        }
        filterChain.doFilter(request, response)
    }
}
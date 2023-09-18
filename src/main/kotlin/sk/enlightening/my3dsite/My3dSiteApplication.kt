package sk.enlightening.my3dsite

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.ComponentScan

@SpringBootApplication
@ComponentScan(basePackages = [
	"sk.enlightening.my3dsite.repository",
	"sk.enlightening.my3dsite.controller",
	"sk.enlightening.my3dsite.service",
	"sk.enlightening.my3dsite.configuration"
])

class My3dSiteApplication

fun main(args: Array<String>) {
	runApplication<My3dSiteApplication>(*args)
}

package sk.enlightening.my3dsite

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.ComponentScan
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories

@SpringBootApplication
@EnableMongoRepositories
@ComponentScan(basePackages = ["sk.enlightening.my3dsite.repository"]) // Add the package of your repository
class My3dSiteApplication

fun main(args: Array<String>) {
	runApplication<My3dSiteApplication>(*args)
}

package sk.enlightening.my3dsite

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories

@SpringBootApplication
@EnableMongoRepositories
class My3dSiteApplication

fun main(args: Array<String>) {
	runApplication<My3dSiteApplication>(*args)
}

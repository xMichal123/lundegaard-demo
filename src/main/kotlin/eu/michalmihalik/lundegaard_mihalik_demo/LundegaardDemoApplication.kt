package eu.michalmihalik.lundegaard_mihalik_demo

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.ComponentScan

@SpringBootApplication
@ComponentScan
class LundegaardDemoApplication

fun main(args: Array<String>) {
	runApplication<LundegaardDemoApplication>(*args)
}

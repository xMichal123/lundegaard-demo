package eu.michalmihalik.lundegaard_mihalik_demo.configuration

import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import eu.michalmihalik.lundegaard_mihalik_demo.model.KindOfRequest
import eu.michalmihalik.lundegaard_mihalik_demo.repository.KindOfRequestRepository

@Configuration
class DataInitializationConfig {

    @Bean
    fun initializeData(kindOfRequestRepository: KindOfRequestRepository): CommandLineRunner {
        return CommandLineRunner {
            // Add your static test data here
            val testData = listOf(
                KindOfRequest(name = "Contract Adjustment"),
                KindOfRequest(name = "Damage Case"),
                KindOfRequest(name = "Complaint"),
            )

            kindOfRequestRepository.saveAll(testData)
        }
    }
}

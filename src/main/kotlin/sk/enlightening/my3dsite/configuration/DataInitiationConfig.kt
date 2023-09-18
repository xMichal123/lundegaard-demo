package sk.enlightening.my3dsite.configuration

import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import sk.enlightening.my3dsite.model.KindOfRequest
import sk.enlightening.my3dsite.repository.KindOfRequestRepository

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

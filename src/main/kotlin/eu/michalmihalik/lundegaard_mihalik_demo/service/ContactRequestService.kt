package eu.michalmihalik.lundegaard_mihalik_demo.service

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import eu.michalmihalik.lundegaard_mihalik_demo.model.ContactRequest
import eu.michalmihalik.lundegaard_mihalik_demo.repository.ContactRequestRepository
import org.springframework.data.domain.Example
import org.springframework.data.domain.ExampleMatcher
import java.sql.Timestamp

@Service
class ContactRequestService @Autowired constructor(private val repository: ContactRequestRepository) {

    fun save(request: ContactRequest): ContactRequest {
        return repository.save(request)
    }

    fun getContactRequestsByFilters(
        kindOfRequest: String?,
        policyNumber: String?,
        name: String?,
        surname: String?,
        startDate: String?,
        endDate: String?
    ): List<ContactRequest> {
        // Create an example object to match against the ContactRequest entity
        val example = Example.of(
            ContactRequest(
                kindOfRequest = kindOfRequest,
                policyNumber = policyNumber,
                name = name,
                surname = surname,
                request = null,
                createdAt = null // This will be used for date range filtering
            ),
            ExampleMatcher.matchingAny().withIgnoreNullValues()
        )

        // Convert startDate and endDate strings to Timestamps if provided
        val startTimestamp = startDate?.let { Timestamp.valueOf(it) }
        val endTimestamp = endDate?.let { Timestamp.valueOf(it) }

        // Use the repository to find contact requests matching the example
        // and apply date range filtering if provided
        return if (startTimestamp != null && endTimestamp != null) {
            repository.findAll(example)
                .filter { it.createdAt != null && it.createdAt in startTimestamp..endTimestamp }
        } else if (startTimestamp != null) {
            repository.findAll(example)
                .filter { it.createdAt != null && it.createdAt >= startTimestamp }
        } else if (endTimestamp != null) {
            repository.findAll(example)
                .filter { it.createdAt != null && it.createdAt <= endTimestamp }
        } else {
            repository.findAll(example)
        }
    }
}

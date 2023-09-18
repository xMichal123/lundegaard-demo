package eu.michalmihalik.lundegaard_mihalik_demo.service

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import eu.michalmihalik.lundegaard_mihalik_demo.model.ContactRequest
import eu.michalmihalik.lundegaard_mihalik_demo.repository.ContactRequestRepository

@Service
class ContactRequestService @Autowired constructor(private val repository: ContactRequestRepository) {

    fun save(request: ContactRequest): ContactRequest {
        return repository.save(request)
    }
}

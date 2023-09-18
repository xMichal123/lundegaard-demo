package sk.enlightening.my3dsite.service

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import sk.enlightening.my3dsite.model.ContactRequest
import sk.enlightening.my3dsite.repository.ContactRequestRepository

@Service
class ContactRequestService @Autowired constructor(private val repository: ContactRequestRepository) {

    fun save(request: ContactRequest): ContactRequest {
        return repository.save(request)
    }
}

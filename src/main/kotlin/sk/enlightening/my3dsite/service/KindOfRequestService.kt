package sk.enlightening.my3dsite.service

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import sk.enlightening.my3dsite.model.KindOfRequest
import sk.enlightening.my3dsite.repository.KindOfRequestRepository

@Service
class KindOfRequestService @Autowired constructor(private val kindOfRequestRepository: KindOfRequestRepository) {

    fun getAllKindOfRequests(): MutableIterable<KindOfRequest> {
        return kindOfRequestRepository.findAll()
    }
}

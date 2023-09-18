package eu.michalmihalik.lundegaard_mihalik_demo.service

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import eu.michalmihalik.lundegaard_mihalik_demo.model.KindOfRequest
import eu.michalmihalik.lundegaard_mihalik_demo.repository.KindOfRequestRepository

@Service
class KindOfRequestService @Autowired constructor(private val kindOfRequestRepository: KindOfRequestRepository) {

    fun getAllKindOfRequests(): MutableIterable<KindOfRequest> {
        return kindOfRequestRepository.findAll()
    }
}

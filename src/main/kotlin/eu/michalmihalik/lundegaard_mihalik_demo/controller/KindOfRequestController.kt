package eu.michalmihalik.lundegaard_mihalik_demo.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import eu.michalmihalik.lundegaard_mihalik_demo.model.KindOfRequest
import eu.michalmihalik.lundegaard_mihalik_demo.service.KindOfRequestService

@RestController
@RequestMapping("/api/request-kinds")
class KindOfRequestController @Autowired constructor(private val kindOfRequestService: KindOfRequestService) {

    @GetMapping("/list")
    fun getKindOfRequests(): MutableIterable<KindOfRequest> {
        return kindOfRequestService.getAllKindOfRequests()
    }
}
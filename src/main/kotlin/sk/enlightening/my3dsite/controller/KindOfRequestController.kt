package sk.enlightening.my3dsite.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import sk.enlightening.my3dsite.model.KindOfRequest
import sk.enlightening.my3dsite.service.KindOfRequestService

@RestController
@RequestMapping("/api/request-kinds")
class KindOfRequestController @Autowired constructor(private val kindOfRequestService: KindOfRequestService) {

    @GetMapping("/list")
    fun getKindOfRequests(): MutableIterable<KindOfRequest> {
        return kindOfRequestService.getAllKindOfRequests()
    }
}
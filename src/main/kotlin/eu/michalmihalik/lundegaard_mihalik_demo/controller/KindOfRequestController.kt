package eu.michalmihalik.lundegaard_mihalik_demo.controller

import eu.michalmihalik.lundegaard_mihalik_demo.model.KindOfRequest
import eu.michalmihalik.lundegaard_mihalik_demo.service.KindOfRequestService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.awt.print.Book


@Controller
class KindOfRequestController @Autowired constructor(private val kindOfRequestService: KindOfRequestService) {
    @QueryMapping
    fun requestKinds(): MutableIterable<KindOfRequest> {
        return kindOfRequestService.getAllKindOfRequests()
    }
}
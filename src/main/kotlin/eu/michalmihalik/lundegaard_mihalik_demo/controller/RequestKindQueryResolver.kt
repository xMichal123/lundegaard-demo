package eu.michalmihalik.lundegaard_mihalik_demo.controller

import eu.michalmihalik.lundegaard_mihalik_demo.model.KindOfRequest
import eu.michalmihalik.lundegaard_mihalik_demo.service.KindOfRequestService
import graphql.kickstart.tools.GraphQLQueryResolver
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component
class RequestKindQueryResolver @Autowired constructor(private val kindOfRequestService: KindOfRequestService) : GraphQLQueryResolver {
    fun requestKinds(): MutableIterable<KindOfRequest> {
        return kindOfRequestService.getAllKindOfRequests()
    }
}

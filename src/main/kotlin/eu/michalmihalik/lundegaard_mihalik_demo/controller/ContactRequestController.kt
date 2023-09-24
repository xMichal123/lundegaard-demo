package eu.michalmihalik.lundegaard_mihalik_demo.controller;

import eu.michalmihalik.lundegaard_mihalik_demo.model.ContactRequest
import eu.michalmihalik.lundegaard_mihalik_demo.service.ContactRequestService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*


@Controller
class ContactRequestController @Autowired constructor(private val service: ContactRequestService) {

    @QueryMapping
    fun getContactRequests(
        @RequestParam(name = "kindOfRequest", required = false) kindOfRequest: String?,
        @RequestParam(name = "policyNumber", required = false) policyNumber: String?,
        @RequestParam(name = "name", required = false) name: String?,
        @RequestParam(name = "surname", required = false) surname: String?,
        @RequestParam(name = "startDate", required = false) startDate: String?,
        @RequestParam(name = "endDate", required = false) endDate: String?
    ): List<ContactRequest?>? {
        // Implement your logic here to fetch contact requests from the service
        // and return the results based on the provided filtering parameters,
        // including date range.

        // Example: Fetch contact requests from the service based on filters
        return service.getContactRequestsByFilters(
            kindOfRequest,
            policyNumber,
            name,
            surname,
            startDate,  // Start date for filtering
            endDate // End date for filtering
        )
    }
}

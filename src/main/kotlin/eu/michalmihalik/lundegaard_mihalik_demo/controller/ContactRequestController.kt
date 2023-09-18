package eu.michalmihalik.lundegaard_mihalik_demo.controller;

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import eu.michalmihalik.lundegaard_mihalik_demo.model.ContactRequest
import eu.michalmihalik.lundegaard_mihalik_demo.service.ContactRequestService

@RestController
@RequestMapping("/api/contact-requests")
class ContactRequestController @Autowired constructor(private val service: ContactRequestService) {

    @PostMapping("/submit")
    fun submitContactRequest(@RequestBody request: ContactRequest): ContactRequest {
        // Save the contact request to the database
        return service.save(request)
    }
}

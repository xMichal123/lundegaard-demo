package sk.enlightening.my3dsite.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import sk.enlightening.my3dsite.model.ContactRequest
import sk.enlightening.my3dsite.service.ContactRequestService

@RestController
@RequestMapping("/api/contact-requests")
class ContactRequestController @Autowired constructor(private val service: ContactRequestService) {

    @PostMapping("/submit")
    fun submitContactRequest(@RequestBody request: ContactRequest): ContactRequest {
        // Perform any necessary validation here

        // Save the contact request to the database
        return service.save(request)
    }
}

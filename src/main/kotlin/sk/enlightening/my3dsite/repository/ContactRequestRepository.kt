package sk.enlightening.my3dsite.repository

import org.springframework.data.jpa.repository.JpaRepository
import sk.enlightening.my3dsite.model.ContactRequest

interface ContactRequestRepository : JpaRepository<ContactRequest, Long>

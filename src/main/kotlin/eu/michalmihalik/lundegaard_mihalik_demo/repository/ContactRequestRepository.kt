package eu.michalmihalik.lundegaard_mihalik_demo.repository

import org.springframework.data.jpa.repository.JpaRepository
import eu.michalmihalik.lundegaard_mihalik_demo.model.ContactRequest

interface ContactRequestRepository : JpaRepository<ContactRequest, Long>

package eu.michalmihalik.lundegaard_mihalik_demo.repository

import eu.michalmihalik.lundegaard_mihalik_demo.model.KindOfRequest
import org.springframework.data.jpa.repository.JpaRepository


interface KindOfRequestRepository : JpaRepository<KindOfRequest, Long>

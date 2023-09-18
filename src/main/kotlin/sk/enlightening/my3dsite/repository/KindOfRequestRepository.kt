package sk.enlightening.my3dsite.repository

import sk.enlightening.my3dsite.model.KindOfRequest
import org.springframework.data.jpa.repository.JpaRepository


interface KindOfRequestRepository : JpaRepository<KindOfRequest, Long>

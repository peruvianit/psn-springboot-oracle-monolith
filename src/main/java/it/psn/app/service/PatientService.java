package it.psn.app.service;

import it.psn.app.model.Patient;

import java.util.List;
import java.util.Optional;

public interface PatientService {
    List<Patient> findAll();
    Optional<Patient> findById(Long id);
    Patient create(Patient patient);
    Optional<Patient> update(Long id, Patient patient);
    boolean delete(Long id);
}

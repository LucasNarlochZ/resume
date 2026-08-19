.PHONY: generate generate-all

RESUMES := $(wildcard */resume.md)

generate:
	@test -n "$(R)" || (echo "Usage: make generate R=<resume-directory>" && exit 1)
	node generate.js "$(R)/resume.md"

generate-all:
	@for resume in $(RESUMES); do \
		$(MAKE) generate R="$${resume%/resume.md}"; \
	done

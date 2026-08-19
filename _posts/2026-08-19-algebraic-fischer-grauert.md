---
layout: paper
title: "An algebraic variant of the Fischer-Grauert Theorem"
title_ja: "Fischer–Grauert定理の代数幾何版"
authors: "Paweł Poczobut"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  A well-known theorem of W. Fischer and H. Grauert states that analytic fiber spaces with all fibers isomorphic to a fixed compact connected complex manifold are locally trivial. Motivated by this result, we show that if $k$ is an algebraically closed field of infinite transcendence degree over its prime field, then every smooth projective family over a reduced $k$-scheme of finite type with isomorphic fibers having reduced automorphism group schemes is locally trivial in the étale topology. We do so by reducing the problem to the case when the base is a smooth integral curve, and then, using the vanishing of the Kodaira-Spencer map, we prove formal triviality of such families at every geometric point of the base. We also provide examples of smooth projective fibrewise trivial families in positive characteristic whose Kodaira-Spencer map are nowhere vanishing.
topic: algebraic-geometry
tags:
  - moduli
  - positive-characteristic
arxiv_id: "2108.10041v1"
arxiv_url: "https://arxiv.org/abs/2108.10041v1"
arxiv_submitted: "2021-08-23"
arxiv_updated: "2021-08-23"
summary: >-
  素体上の超越次数が無限な代数閉体上で、同型なfiberをもつ滑らかな射影族は、fiberの自己同型群schemeが被約ならétale局所自明であることを証明する。Fischer–Grauert定理の代数幾何版であり、Kodaira–Spencer写像の消滅からformal trivialityを導く一方、正標数で自己同型群の仮定が必要になる例も構成する。
abstract_en: ""
summary_en: >-
  The paper formulates and proves an algebraic counterpart of the Fischer–Grauert local-triviality theorem. Over a sufficiently large algebraically closed field, a smooth projective family over a reduced finite-type base is étale locally trivial when all fibers are isomorphic and the fiber's automorphism group scheme is reduced. The proof passes through generic isotriviality, vanishing of the Kodaira–Spencer map, reduction to a smooth curve, and formal triviality. Positive-characteristic examples show that nonreduced automorphism schemes can obstruct this route.
abstract_ja: >-
  素体上の超越次数が無限である代数閉体 $k$ を考える。被約な有限型 $k$-scheme上の滑らかな射影族で、すべてのfiberが互いに同型かつfiberの自己同型群schemeが被約なら、その族はétale位相で局所自明である。証明では基礎を滑らかな整曲線へ還元し、Kodaira–Spencer写像の消滅から各幾何学的点でのformal trivialityを示す。また正標数では、fiberwise trivialでありながらKodaira–Spencer写像が至る所非零となる例を与える。
abstract_source_url: "https://arxiv.org/abs/2108.10041v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2108.10041v1](https://arxiv.org/abs/2108.10041v1)
- **著者:** Paweł Poczobut
- **初回投稿日:** 2021年8月23日
- **最終更新日:** 2021年8月23日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

古典的Fischer–Grauert定理は、全fiberが固定されたcompact connected complex manifoldと解析的に同型なproper submersionが解析位相で局所自明であることを述べる。本論文は、代数幾何でどの位相と仮定を選べば対応する主張が成立するかを問う。

Zariski位相では、全fiberが同型でもgeneric fiberが固定fiberのbase changeと同型でない族があり、局所自明性は一般に失敗する。そこでétale位相へ移り、素体上の超越次数が無限な代数閉体、被約な有限型base、smooth projectiveなfiberwise trivial family、被約な自己同型群schemeという仮定のもとで局所自明性を証明する。

証明はgenericなisotrivialityからKodaira–Spencer写像の消滅を得て、baseを滑らかな整曲線へ還元し、各点でformal trivialityを示す。標数零では自己同型群schemeの被約性は自動だが、正標数では非被約になり得る。本論文はその場合にKodaira–Spencer写像が至る所非零となるfiberwise trivial familyも構成し、仮定を外すならfppf位相が適切かという問題を残す。

## 背景と問題設定

$f:\mathcal X\to S$ が固定 $k$-scheme $X$ をfiberにもつfiberwise trivial familyであるとは、各 $s\in S(k)$ について $\mathcal X_s\simeq X$ であることをいう。isotrivialityは、各点のあるétale近傍 $V\to S$ 上で

$$
\mathcal X\times_S V\simeq X\times_k V
$$

となることを要求する。fiberごとの同型はfamilyとしての同型を直ちには与えないため、$\operatorname{Isom}_S(\mathcal X,X\times S)$ のbase上での挙動と変形の自明性を結ぶ必要がある。

## 主結果

### 代数的Fischer–Grauert定理（Theorem 1.3）

$k$ を素体上の超越次数が無限な代数閉体とする。$f:\mathcal X\to S$ を、被約な有限型 $k$-scheme $S$ 上のsmooth projectiveかつfiberwise trivialな族とし、fiberを $X$ とする。自己同型群scheme $\operatorname{Aut}_k^X$ が被約なら、$f$ はisotrivial、すなわちétale局所自明である。

標数零では有限型群schemeがsmoothであるため自己同型群schemeの被約性は自動となる。一方、Introductionはこの仮定なしでfppf局所自明性が従うかをQuestion 1.4として提示しており、これは証明済みの結論ではない。

### 正標数での限界

Introductionでは概略として次のように述べられている。自己同型群schemeが非被約となる正標数で、smooth projectiveかつfiberwise trivialでありながらKodaira–Spencer写像がどの点でも消えない族が構成される。したがって主定理の証明経路は、自己同型群に仮定を置かずには成立しない。

## 証明の見取り図

まずIsom schemeが可算個の有限型成分に分かれることと、$k$ の超越次数が無限であることを用い、ある成分がbaseを支配するgeneric isotrivialityを示す。これから相対Kodaira–Spencer写像が $S$ 上で消滅する。次にflatnessのvaluative criterionの変形を用いて問題を滑らかな整曲線へ還元する。

曲線上では、標数零ならKodaira–Spencer写像の消滅を逐次の無限小近傍に沿う自明化へ持ち上げ、formal trivialityを得る。正標数では同じ計算の代わりにOgusの補題の変形を用いてFrobeniusに沿うdescentをétale近傍で構成する。最後にformal trivialityとétale局所自明性を結ぶ既知の判定を適用する。

## 原論文との対応

- **Abstractページ:** [arXiv:2108.10041v1](https://arxiv.org/abs/2108.10041v1)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorem 1.1（古典的結果）, Theorem 1.3, Question 1.4
- **論文構成の説明:** pp. 2–3（証明方針と各sectionの役割）
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction

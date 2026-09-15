---
layout: paper
title: "Geometric realizations of Brauer classes on K3 surfaces from hyperk\\\"ahler contractions"
title_ja: "超Kähler収縮によるK3曲面のBrauer類の幾何学的実現"
authors: "Sarah Frei, Jack Petok, Anthony Várilly-Alvarado"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.NT
arxiv_abstract: >-
  Elements of the Brauer group $\operatorname{Br}(S)$ of a variety $S$ have geometric incarnations as étale-projective $S$-bundles, yet producing minimalist constructions of such bundles, which often power arithmetic applications, remains a difficult problem. When $S$ is a K3 surface with Picard rank $1$, we use the birational geometry of moduli spaces of twisted sheaves on $S$ to construct geometric realizations of nontrivial elements of $\operatorname{Br}(S)$. We recover many known geometric constructions of Brauer classes on K3 surfaces while providing a common moduli-theoretic framework for them. As a by-product, we give a new proof of the period-index theorem for very general K3 surfaces.
topic: algebraic-geometry
tags:
  - hyperkahler-geometry
  - vector-bundles-sheaves
  - moduli
  - birational-geometry
arxiv_id: "2609.15892v1"
arxiv_url: "https://arxiv.org/abs/2609.15892"
arxiv_submitted: "2026-09-14"
arxiv_updated: "2026-09-14"
summary: >-
  Picard数1の非常に一般の偏極K3曲面上で、任意の非自明な有限位数Brauer類をエタール局所自明な射影空間束として具体化する。その束をねじれ層のモジュライ空間における超Kähler収縮の例外軌跡へ組み込み、次元も制御することで、既知の個別構成を統一しperiod-index定理の新しい証明を与える。
abstract_en: ""
summary_en: >-
  The paper constructs projective-bundle representatives of torsion Brauer classes on a very general Picard-rank-one K3 surface. These representatives occur inside exceptional loci of contractions between hyperkähler moduli spaces built from twisted sheaves. The construction controls the dimensions of the ambient and parameter spaces and unifies several earlier geometric examples. It also yields another proof that period equals index in this setting.
abstract_ja: >-
  多様体のBrauer類はエタール射影空間束として幾何学的に表せるが、小さい階数の具体的構成は難しい。本論文はPicard数1のK3曲面について、ねじれ層のモジュライ空間の双有理幾何を用い、非自明なBrauer類を超Kähler多様体の収縮に現れる射影空間束として構成する。従来の多くの構成を一つのモジュライ理論的枠組みにまとめ、非常に一般のK3曲面に対するperiod-index定理の別証明も導く。
abstract_source_url: "https://arxiv.org/abs/2609.15892"
license_name: "Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International"
license_url: "https://creativecommons.org/licenses/by-nc-nd/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.15892](https://arxiv.org/abs/2609.15892)
- **著者:** Sarah Frei, Jack Petok, Anthony Várilly-Alvarado
- **初回投稿日:** 2026年9月14日
- **最終更新日:** 2026年9月14日
- **主分類・副分類:** math.AG（主分類）, math.NT
- **ライセンス:** [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)

## 要約

Brauer群の元はエタール局所自明な射影空間束によって表現できる。この表現は有理性問題や弱近似の障害に使われる一方、与えられた類に対して階数の小さい幾何学的モデルを系統的に作ることは難しかった。

本論文は、次数$2d$、Picard数1の非常に一般の複素射影K3曲面$S$を扱う。非自明な$n$-torsion類$\alpha\in\operatorname{Br}(S)[n]$ごとに、$\alpha$を表す$\mathbb P^{n-1}$束$E\to S$を作り、それを超Kähler多様体の双有理収縮の例外軌跡へ埋め込む。

構成は$\alpha$-ねじれGieseker安定層のモジュライ空間とUhlenbeck収縮を中心とする。これにより、特殊三次四次元多様体などから得られていた一見個別的なBrauer類の実現が、ねじれMukai格子と安定性条件の共通言語にまとめられる。

さらに、この射影空間束の階数がBrauer類の位数と一致するため、非常に一般の射影K3曲面上で$\operatorname{per}(\alpha)=\operatorname{ind}(\alpha)$が従う。

## 背景と問題設定

$\alpha$-ねじれベクトル束を射影化すると、ねじれは射影空間上で消え、$S$上のエタール射影空間束が得られる。したがって問題は、所与のBrauer類を表すねじれ層を、超Kähler多様体の幾何と両立する形で選ぶことにある。

Introductionは、三次四次元多様体、Verra四次元多様体、Mukai双対K3曲面に由来する従来例が、いずれも超Kähler収縮の例外軌跡として理解できることを指摘する。本論文の課題は、この像をすべての非自明なBrauer類へ拡張し、射影空間束と周囲の多様体の次元を明示的に抑えることである。

## 主結果

### Brauer類の一様な実現（Theorem 1.1）

次数$2d$の非常に一般の射影K3曲面$S$と$n>0$に対し、任意の非自明な$\alpha\in\operatorname{Br}(S)[n]$はエタール$\mathbb P^{n-1}$束$E\to S$として実現される。さらに$\dim X\leq4n-2$の超Kähler多様体$X$と双有理射$\pi:X\to Y$が存在し、$E$は$S$へ収縮される。

$E$は例外軌跡をなす族$Q$の一部であり、$Q$は$S\times M$上の$\mathbb P^{n-1}$束、$M$は$\dim M\leq2n-2$の超Kähler多様体となる。

### 素数位数での小次元化（Theorem 1.2）

$p$を素数とし、$p>2$なら$p\nmid d$も仮定する。任意の非自明な$\alpha\in\operatorname{Br}(S)[p]$は、ある$r>0$に対する$\mathbb P^{pr-1}$束として、$\dim X\leq2pr+2$の超Kähler多様体内に実現される。例外軌跡の底に現れる$M$は一点またはK3曲面であり、後者の場合は$S$のねじれFourier--Mukai partnerである。

### period-indexの帰結（Corollary 1.3）

非常に一般の複素射影K3曲面では、すべての$\alpha\in\operatorname{Br}(S)$について

$$
\operatorname{per}(\alpha)=\operatorname{ind}(\alpha)
$$

が成り立つ。Theorem 1.1が位数$n$の類に$\mathbb P^{n-1}$束を与えることと、一般にperiodがindexを割り切ることから従う。

## 証明の見取り図

ねじれMukai格子からadmissible Mukai vector $a$を選び、$v=a+(0,0,-1)$と置く。$X=M_h(v,\alpha)$を$\alpha$-ねじれGieseker安定層のモジュライ空間、$Y=M_h^{\mathrm{Uhl}}(v,\alpha)$をUhlenbeckモジュライ空間とすると、Uhlenbeck収縮$X\to Y$の例外軌跡が所望の射影空間束を与える。

通常のUhlenbeck構成で必要な整除条件が満たせない場合には、Bridgeland安定性多様体の壁越えから別の収縮を作る。残る仕事は小さい平方を持つadmissible Mukai vectorの存在であり、Introductionによれば、これをBrauer類の格子論的分類とDiophantus方程式の解析によって解決する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.15892](https://arxiv.org/abs/2609.15892)
- **Introduction:** Section 1, pp. 1--6
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2, Corollary 1.3
- **論文構成の説明:** pp. 4--5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY-NC-ND 4.0
- **source_scope:** Abstract and Introduction

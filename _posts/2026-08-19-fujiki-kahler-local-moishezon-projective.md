---
layout: paper
title: "Criteria for a fiberwise Fujiki/Kahler family to be locally Moishezon/projective"
title_ja: "ファイバーごとにFujiki/Kählerである族の局所Moishezon性・射影性判定"
authors: "Jian Chen"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
arxiv_abstract: >-
  We utilize the theory of non-Kahler loci by S. Boucksom to construct an integral 2-cohomology class whose restriction to a general fiber is big, and then construct a relatively big line bundle via the exponential sequence. This leads to a local Moishezonness criterion for fibrations whose total spaces are in Fujiki class C, generalizing the bimeromorphic version of F. Campana's local projectivity theorem. We further combine a similar idea with the singular Demailly-Paun theorem by T. Collins-V. Tosatti to obtain a local projectivity criterion for fibrations from compact Kahler manifolds, yielding a new proof and a generalization of F. Campana's local projectivity theorem.
topic: algebraic-geometry
tags:
  - positivity
  - complex-analytic-spaces
  - vector-bundles-sheaves
arxiv_id: "2503.07548v3"
arxiv_url: "https://arxiv.org/abs/2503.07548v3"
arxiv_submitted: "2025-03-10"
arxiv_updated: "2026-06-03"
summary: >-
  Fujiki class Cの全空間からの固有ファイブレーションが局所Moishezonになる条件と、コンパクトKähler全空間からのファイブレーションが局所射影的になる条件を与える。整数2次コホモロジー類から指数完全系列で線束を作り、一般ファイバー上のbig性または各ファイバー近傍でのample性を非Kähler locusと特異Demailly–Păun定理で確立する。
abstract_en: ""
summary_en: >-
  The paper develops criteria turning fiberwise positivity into local algebraicity for proper holomorphic fibrations. In the Fujiki-class setting, it constructs an integral degree-two class that becomes big on general fibers and realizes it as the Chern class of a line bundle, leading to local Moishezonness. In the compact Kähler setting, a parallel construction combines with a singular form of the Demailly–Păun theorem to produce local projectivity. Both criteria impose a restriction condition on global holomorphic two-forms and torsion-freeness of a higher direct image sheaf.
abstract_ja: >-
  Boucksomの非Kähler locusの理論を用いて、一般ファイバーへの制限がbigとなる整数2次コホモロジー類を構成し、指数完全系列によって相対的にbigな線束を得る。これにより、全空間がFujiki class Cであるファイブレーションの局所Moishezon性判定を示す。さらにCollins–Tosattiの特異Demailly–Păun定理と同様の着想を組み合わせ、コンパクトKähler多様体からのファイブレーションに対する局所射影性判定を得る。
abstract_source_url: "https://arxiv.org/abs/2503.07548v3"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2503.07548v3](https://arxiv.org/abs/2503.07548v3)
- **著者:** Jian Chen
- **初回投稿日:** 2025年3月10日
- **最終更新日:** 2026年6月3日
- **主分類・副分類:** math.AG（主分類）, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

変形族における多重種数の不変性などでは、局所射影性やその双有理版である局所Moishezon性が重要な正値性を供給する。本論文は、ファイバーがFujikiまたはKählerであるという微分幾何的情報から、ファイブレーション自体の局所代数性を導く条件を研究する。

第一の主結果は、Fujiki class Cの多様体 $Z$ からの固有写像について、あるファイバーへの大域的正則2形式の制限がゼロであり、$R^2f_*\mathcal O_Z$ がtorsion-freeなら、写像が局所Moishezonになるという判定である。

第二の主結果では、$Z$ をコンパクトKähler多様体とし、底を局所既約とする。同じ二つのコホモロジー的条件のもとで、より強く $f$ が局所射影的であることを示す。

両定理は共通の設計をもつ。整数2次コホモロジー類を作って指数完全系列により線束へ持ち上げ、Moishezonの場合は一般ファイバー上のbig性をBoucksomの非Kähler locusで、射影的な場合はample性をCollins–Tosattiの特異Demailly–Păun定理で確認する。

## 背景と問題設定

局所Moishezon写像とは、底の各点の近傍で射影的写像と双有理同値になる写像である。局所射影的写像には、各ファイバー上でampleとなる相対線束が存在する。したがって問題の核心は、ファイバー上で見える実コホモロジーの正値性を、族全体の正則線束へ変換できるかにある。

指数完全系列で整数類 $u\in H^2(Z,\mathbb Z)$ を線束の第1 Chern類にする際、$R^2f_*\mathcal O_Z$ のtorsion-freenessが障害の消滅を一般点から全体へ伝える。また

$$
H^0(Z,\Omega_Z^2)\longrightarrow H^0(Z_s,\Omega_{Z_s}^2)
$$

がある滑らかなファイバー $Z_s$ でゼロという仮定が、必要な整数 $(1,1)$-類の構成を支える。

## 主結果

### 局所Moishezon性（Theorem 1.1 = Theorem 4.7）

$Z$ をFujiki class Cの複素多様体、$S$ を正規連結複素解析空間とし、$f:Z\to S$ を連結ファイバーをもつ固有全射とする。$f$ が平坦かつsubmersiveとなる最大の解析的Zariski開集合と $S_{\mathrm{reg}}$ の共通部分 $S^0$ に、上の2形式制限写像がゼロとなる点 $s$ が存在し、さらに $R^2f_*\mathcal O_Z$ がtorsion-freeなら、$f$ は局所Moishezonである。

### 局所射影性（Theorem 1.2 = Theorem 5.1）

$Z$ をコンパクトKähler多様体、$S$ を局所既約な連結複素解析空間とする。同じ固有性・連結ファイバー・2形式制限・torsion-freeの条件のもとで、$f:Z\to S$ は局所射影的である。結論は各ファイバーが射影的という点ごとの主張より強く、その近傍上に相対ample線束が存在することを意味する。

## 証明の見取り図

局所Moishezon性では、まず非Kähler locusを避けるように有理コホモロジー類を近似し、一般ファイバーへの制限がbigとなる整数2次類を作る。torsion-free条件により指数完全系列の障害を消し、この類を線束の第1 Chern類として実現する。一般ファイバー上でbigな相対線束が、局所Moishezon性を与える。

局所射影性では同様に整数類と線束を構成した後、Collins–Tosattiの特異Demailly–Păun定理を用いる。これにより、射影性をまだ知らないファイバーにNakai–Moishezon判定を適用するのではなく、各ファイバー近傍でその線束のChern類を表すKähler形式を直接構成し、相対ample性を得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2503.07548v3](https://arxiv.org/abs/2503.07548v3)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorems 1.1 (= 4.7), 1.2 (= 5.1)
- **論文構成の説明:** Introduction, pp. 1–2
- **確認したarXivバージョン:** v3
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction

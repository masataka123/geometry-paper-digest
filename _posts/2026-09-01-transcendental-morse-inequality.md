---
layout: paper
title: "Transcendental Morse inequality on Kähler manifolds"
title_ja: "Kähler多様体上の超越的Morse不等式"
authors: "Valentino Tosatti"

arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.AG
  - math.DG
arxiv_abstract: >-
  We prove the transcendental Morse inequality conjecture of Boucksom-Demailly-Păun-Peternell. Among the corollaries of this result, this proves orthogonality of divisorial Zariski decompositions, shows that the pseudoeffective and movable cones are dual, and establishes the differentiability of the volume function on the big cone, on all compact Kähler manifolds.
topic: several-complex-variables
tags:
  - positivity
  - pluripotential-theory
  - monge-ampere-equations
  - birational-geometry
arxiv_id: "2608.30153v1"
arxiv_url: "https://arxiv.org/abs/2608.30153"
arxiv_submitted: "2026-08-31"
arxiv_updated: "2026-08-31"
summary: >-
  Boucksom–Demailly–Păun–Peternellの超越的Morse不等式予想を任意のコンパクトKähler多様体上で証明する。これにより因子的Zariski分解の直交性、擬有効錐と可動錐の双対性、big錐上の体積関数の微分公式と局所 $C^{1,1}$ 正則性が一挙に従う。
abstract_en: ""
summary_en: >-
  The paper resolves the transcendental Morse inequality for arbitrary nef real $(1,1)$-classes on compact Kähler manifolds. The proof modifies the mass-concentration method by using positive currents in a Kähler class supported on a set of zero Lebesgue measure. A refined Hahn–Banach argument then supplies the sharp volume estimate. Established implications yield orthogonality for divisorial Zariski decompositions, cone duality, and differentiability properties of the volume function.
abstract_ja: >-
  Boucksom–Demailly–Păun–Peternellによる超越的Morse不等式予想を証明する。その帰結として、全てのコンパクトKähler多様体上で因子的Zariski分解の直交性、擬有効錐と可動錐の双対性、big錐上の体積関数の微分可能性が従う。
abstract_source_url: "https://arxiv.org/abs/2608.30153"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.30153](https://arxiv.org/abs/2608.30153)
- **著者:** Valentino Tosatti
- **初回投稿日:** 2026-08-31
- **最終更新日:** 2026-08-31
- **主分類・副分類:** math.CV（主分類）, math.AG, math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

コンパクトKähler多様体上の擬有効 $(1,1)$ 類の体積は、正カレントの絶対連続部分のMonge–Ampère質量で定義される。射影的場合には代数的Morse不等式が知られる一方、任意の超越的nef類に対する鋭い不等式は2004年以来の予想であった。

本論文は任意のコンパクトKähler多様体 $X^n$ とnef類 $[\alpha],[\beta]$ に対し、この予想を完全に証明する。係数 $n$ をもつ鋭い下界が得られ、従来の一般Kählerの場合の弱い係数 $n^2$ を改善する。

一つの不等式から、因子的Zariski分解の直交性、体積関数の微分公式、擬有効錐と可動錐の双対性などが既知の議論を通じて無条件に従う。

## 背景と問題設定

big類はKählerカレントを含む類であり、その体積は正値である。問題は、二つのnef類の差の体積を交叉数だけでどこまで下から評価できるかにある。射影的多様体と因子類では古典的結果があるが、一般Kähler多様体では積分類でない超越的類を扱う必要がある。

## 主結果

### 超越的Morse不等式（Theorem 1.1）

コンパクトKähler多様体 $X^n$ 上のnef類 $[\alpha],[\beta]$ に対し

$$
\operatorname{Vol}([\alpha]-[\beta])\geq
\int_X\alpha^n-n\int_X\alpha^{n-1}\wedge\beta
$$

が成り立つ。

### Zariski分解・体積・錐双対（Corollary 1.2）

任意の擬有効類 $[\alpha]$ に対する直交性は

$$
\operatorname{Vol}([\alpha])=\langle[\alpha]^{n-1}\rangle\cdot[\alpha]
$$

と表される。またbig類 $[\alpha]$ と任意の $[\beta]$ について

$$
\left.\frac{d}{dt}\right|_{t=0}\operatorname{Vol}([\alpha]+t[\beta])
=n\langle[\alpha]^{n-1}\rangle\cdot[\beta]
$$

であり、体積関数はbig錐内で局所 $C^{1,1}$ となる。さらに擬有効錐と可動錐はPoincaré pairingの下で双対である。

## 証明の見取り図

Demaillyの質量集中法を修正する。任意のKähler類に、Lebesgue零集合上に支持をもつ閉正カレントを構成し、その正則化を右辺に組み込んだ複素Monge–Ampère方程式をCalabi–Yau定理で解く。弱極限では補助カレントの支持が零集合であるため、特異部分が必要な質量を担い、絶対連続Monge–Ampère部分に鋭い下界が残る。これをGauduchon計量を用いるLamari型Hahn–Banach議論へ入力し、差の類に属する正カレントの体積下界を得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.30153](https://arxiv.org/abs/2608.30153)
- **Introduction:** Introduction, pp. 1–4
- **Introduction中で言及された主要定理番号:** 本文の主結果各小節に記載
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction

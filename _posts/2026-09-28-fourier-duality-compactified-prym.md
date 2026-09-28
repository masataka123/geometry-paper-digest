---
layout: paper
title: "Fourier duality on compactified Prym fibrations"
title_ja: "コンパクト化PrymファイブレーションのFourier双対性"
authors: "Anne Larsen"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We study Fourier-Mukai duality for a class of compactified Prym fibrations including moduli spaces of $\mathrm{SL}$ Higgs bundles over the elliptic locus. This leads to a shadow of the Hausel-Thaddeus conjecture, proof of the Corti-Hanamura motivic decomposition conjecture for these fibrations, and multiplicativity of the perverse filtration. Our approach can be described as a generalization of the Maulik-Shen-Yin package for compactified Jacobian fibrations to the case when the dual abelian fibration is a stack. This forces us to move beyond the case of full supports. Technical tools include a new pullback identity for the stacky Grothendieck-Riemann-Roch tau functor introduced by Toën, results on descent of (Arinkin-)Poincaré sheaves, and a comparison of Poincaré sheaves of the Prym varieties of families of smooth and nodal curves along the lines of Franco-Hanson-Horn-Oliveira.
topic: algebraic-geometry
tags:
  - moduli
  - higgs-nonabelian-hodge
arxiv_id: "2609.31604v1"
arxiv_url: "https://arxiv.org/abs/2609.31604"
arxiv_submitted: "2026-09-25"
arxiv_updated: "2026-09-25"
summary: >-
  双対側が多様体ではなくスタックになるコンパクト化Prymファイブレーションへ、Fourier–Mukai変換による分解定理の枠組みを拡張する。良いコンパクト化Prymファイブレーションに対し、混合Hodge構造の同型、動機的分解、perverse filtrationの乗法性を同時に得る。
abstract_en: >-
  We study Fourier-Mukai duality for a class of compactified Prym fibrations including moduli spaces of $\mathrm{SL}$ Higgs bundles over the elliptic locus. This leads to a shadow of the Hausel-Thaddeus conjecture, proof of the Corti-Hanamura motivic decomposition conjecture for these fibrations, and multiplicativity of the perverse filtration. Our approach can be described as a generalization of the Maulik-Shen-Yin package for compactified Jacobian fibrations to the case when the dual abelian fibration is a stack. This forces us to move beyond the case of full supports. Technical tools include a new pullback identity for the stacky Grothendieck-Riemann-Roch tau functor introduced by Toën, results on descent of (Arinkin-)Poincaré sheaves, and a comparison of Poincaré sheaves of the Prym varieties of families of smooth and nodal curves along the lines of Franco-Hanson-Horn-Oliveira.
summary_en: ""
abstract_ja: >-
  楕円軌跡上の $\mathrm{SL}$ Higgs束のモジュライ空間を含むコンパクト化Prymファイブレーションの族について、Fourier–Mukai双対性を研究する。Hausel–Thaddeus予想の一つの影を与え、この種のファイブレーションに対するCorti–Hanamuraの動機的分解予想を証明し、perverse filtrationのカップ積に関する乗法性を示す。双対アーベル・ファイブレーションがスタックである場合へMaulik–Shen–Yinの枠組みを拡張し、stacky Grothendieck–Riemann–Roch、Poincaré層の降下、節点曲線とその正規化に付随するPrym多様体の比較を用いる。
abstract_source_url: "https://arxiv.org/abs/2609.31604"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.31604](https://arxiv.org/abs/2609.31604)
- **著者:** Anne Larsen
- **初回投稿日:** 2026年9月25日
- **最終更新日:** 2026年9月25日
- **主分類・副分類:** math.AG
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

Higgs束のHitchinファイブレーションでは、コホモロジーのperverse filtrationと重みfiltrationの対応や、そのカップ積との両立が中心問題となる。コンパクト化Jacobianについては、双対も通常の空間である場合にFourier–Mukai変換からperverse filtrationを回収する一般理論がある。

本論文は、双対がスタックになるコンパクト化Prymファイブレーションへこの理論を拡張する。これは固定行列式をもつ $\mathrm{SL}_n$ Higgs束の双対が、$n$-torsion線型束の群による商スタックとして現れる状況を捉えるためである。

著者は一定の平坦性・滑らかさ・support条件と、各supportの一般曲線が高々節点特異点をもつという条件を課した「good」なファイブレーションに対し、混合Hodge構造の同型、動機的分解、perverse filtrationの乗法性を証明する。ただし $\mathrm{SL}_n$ Hitchinファイブレーション全体には非既約・非被約なスペクトル曲線も現れるため、主定理はそのまま全体を覆わず、楕円軌跡上のHiggs型モジュライが主要例となる。

## 背景と問題設定

滑らかな複素射影曲線 $C$ と、その上の次数 $n$ の有限平坦写像を備えた平面曲線の族 $X\to B$ を考える。相対ノルム写像の核

$$
\operatorname{Prym}(X/B)=\ker\!\left(\operatorname{Nm}_{X/C}:\overline J^0(X/B)\to J^0(C)\times B\right)
$$

がコンパクト化Prymファイブレーションである。$\Gamma=J^0(C)[n]$ とすると双対は

$$
\operatorname{Prym}(X/B)^\vee=[\operatorname{Prym}(X/B)/\Gamma]
$$

というスタックであり、その慣性スタックは固定点部分の非交和で記述される。従来のfull supportを使う議論だけでは、慣性スタックの成分が底空間の真部分集合へ写る場合を扱えないことが新たな障害となる。

## 主結果

### 主定理（Theorem 0.1）

$\pi:M\to B$ をgood compactified Prym fibrationとし、双対スタックを $M^\vee$、その慣性スタックを $IM^\vee$ とする。このとき次が成り立つ。

1. Tate twistを除いて、複素混合Hodge構造の同型
   $$
   H^*(M;\mathbb C)\simeq H^*(IM^\vee;\mathbb C)
   $$
   が存在する。これはHausel–Thaddeus予想のcohomologicalな影に当たる。
2. $R\pi_*\mathbb Q_M$ はshiftされたperverse成分へ動機的に分解する。これは当該ファイブレーションについてCorti–Hanamura予想を与える。
3. $H^*(M;\mathbb C)$ のperverse filtrationはカップ積に関して乗法的である。

Introductionはgoodnessの条件をDefinition 2.9へ委ねている。特に、$\mathrm{SL}_n$ Higgs型モジュライについては次数0かつ楕円軌跡上で条件が満たされる一方、Hitchin底全体は非整スペクトル曲線を含むため対象外である。

## 証明の見取り図

Arinkin–Poincaré層のstacky Chern characterからFourier型のcohomological correspondenceを構成する。full supportへ還元できない成分に対しては、節点曲線族のコンパクト化Prymと正規化族のPrymのPoincaré層を比較し、有限群の拡大を伴うアーベルschemeへ問題を移す。さらに可換アーベル群スタックの双対性を用いて通常のアーベルschemeの場合へ還元する。

この過程には、Toënのstacky Grothendieck–Riemann–Roch $\tau$ functorについて、特異スタックの正則埋込みによるpullbackとの整合性が必要となる。論文はその恒等式を整備した後、構成したprojectorがperverse filtrationを回収することを示し、Fourier vanishingを経て動機的分解と乗法性を導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.31604](https://arxiv.org/abs/2609.31604)
- **Introduction:** Section 0, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorem 0.1, Definition 2.9, Proposition 2.13, Theorem 2.24
- **論文構成の説明:** Section 0.4, pp. 4–5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction

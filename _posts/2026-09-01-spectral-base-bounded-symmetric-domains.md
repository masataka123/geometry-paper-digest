---
layout: paper
title: "The Spectral base and quotients of bounded symmetric domains"
title_ja: "スペクトル基底と有界対称領域の商"
authors: "Siqi He, Jie Liu, Ngaiming Mok"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
arxiv_abstract: >-
  In this article, we explore Higgs bundles on a projective manifold $X$, focusing on their spectral bases, a concept introduced by T.Chen and B.Ngô. The spectral base is a specific closed subscheme within the space of symmetric differentials. We observe that if the spectral base vanishes, then any reductive representation $ρ: π_1(X) \to \text{GL}_r(\mathbb{C})$ is both rigid and integral. Additionally, we prove that for $X=Ω/Γ$, a quotient of a bounded symmetric domain $Ω$ of rank at least $2$ by a torsion-free cocompact irreducible lattice $Γ$, the spectral base indeed vanishes, which generalizes a result of B.Klingler.
topic: algebraic-geometry
tags:
  - higgs-nonabelian-hodge
  - fundamental-groups
  - hodge-theory
arxiv_id: "2401.15852v1"
arxiv_url: "https://arxiv.org/abs/2401.15852"
arxiv_submitted: "2024-01-29"
arxiv_updated: "2024-01-29"
summary: >-
  Higgs束のHitchin写像が通過するスペクトル基底と、射影多様体の基本群表現との関係を調べる。スペクトル基底の消滅から簡約表現の剛性・整性を導き、階数2以上の有界対称領域を既約余コンパクト格子で割った商では全階数のスペクトル基底が消えることを示す。
abstract_en: ""
summary_en: >-
  This work uses the spectral base of Higgs bundles to connect symmetric differentials with representations of a projective manifold's fundamental group. Vanishing of the rank-$r$ spectral base forces reductive complex representations of that rank to be rigid and integral, while non-Archimedean reductive representations have bounded image. The authors prove such vanishing in every rank for compact quotients of bounded symmetric domains of rank at least two by torsion-free irreducible lattices. The argument provides a uniform geometric extension of earlier restricted vanishing results.
abstract_ja: >-
  射影多様体上のHiggs束について、対称微分の空間内の閉部分スキームであるスペクトル基底を研究する。スペクトル基底が消えると簡約複素表現は剛性と整性をもち、非Archimedes局所体への簡約表現は有界像をもつ。さらに階数2以上の有界対称領域の余コンパクト商では、任意の階数でスペクトル基底が消える。
abstract_source_url: "https://arxiv.org/abs/2401.15852"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2401.15852](https://arxiv.org/abs/2401.15852)
- **著者:** Siqi He, Jie Liu, Ngaiming Mok
- **初回投稿日:** 2024年1月29日
- **最終更新日:** 2024年1月29日
- **主分類・副分類:** math.AG（主分類）, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

高次対称微分と基本群の関係は、SeveriとEsnaultに遡る問題である。本論文は非可換Hodge対応を背景に、Chen–Ngôが導入したスペクトル基底を用いてこの関係を調べる。

階数 $r$ のHiggs束のHitchin写像は、Hitchin基底全体ではなくスペクトル基底 $S_X^r$ を経由する。著者らは $S_X^r=0$ が基本群の簡約表現に強い算術的・剛性的制約を課すことを示す。

さらに、階数2以上の有界対称領域の余コンパクト局所対称商では、すべての $r$ に対して $S_X^r=0$ を証明する。Hitchin基底自体は大きくなり得るのに、その中のスペクトル基底が一点に退化する点が核心である。

## 背景と問題設定

射影多様体 $X$ の階数 $r$ のHiggs束に対するHitchin写像は

$$
h_X:\mathcal M_{\mathrm{Higgs}}^{\mathrm{stack},r}\longrightarrow
A_X^r:=\bigoplus_{i=1}^r H^0\!\left(X,\operatorname{Sym}^i\Omega_X^1\right)
$$

と書ける。$\dim X\geq2$ ではHiggs場の可積分条件により一般に全射でなく、写像は閉部分スキーム $S_X^r\subset A_X^r$ を経由する。

非可換Hodge対応はHiggs束のモジュライと指標多様体を結ぶ。したがって $S_X^r$ の消滅は、Higgs場の変形だけでなく基本群表現の変形可能性にも影響する。

## 主結果

### スペクトル基底消滅の帰結（Theorem 1.2）

射影多様体 $X$ で $S_X^r=0$ ならば、任意の簡約表現 $\rho:\pi_1(X)\to\mathrm{GL}_r(\mathbb C)$ は剛的かつ整的であり、さらに整数係数Hodge構造の変動の複素直因子となる。また、非Archimedes局所体 $F$ への任意の簡約表現 $\pi_1(X)\to\mathrm{GL}_r(F)$ は有界像をもつ。

### 有界対称領域の商での消滅（Theorem 1.3）

$\Omega=\Omega_1\times\cdots\times\Omega_m$ を階数2以上の有界対称領域、$\Gamma\subset\operatorname{Aut}(\Omega)$ を捩れのない既約余コンパクト格子とし、$X=\Omega/\Gamma$ と置く。このとき任意の $r\geq1$ に対して

$$
S_X^r=0
$$

が成り立つ。階数1の複素球の場合には反例があるため、階数仮定は本質的である。

### 基本群表現とHiggs束への系（Corollaries 1.4, 1.5）

上の局所対称商では、任意の階数の簡約表現が剛的かつ整的となり、任意のHiggs束が冪零となる。前者は余コンパクト格子に対するMargulisの剛性を回収しつつ、Higgs束全体に及ぶ後者は表現だけを扱う剛性定理を越える情報である。

## 証明の見取り図

Introductionによれば、スペクトル基底の消滅から表現の剛性へは非可換Hodge対応とHitchin写像を用いる。有界対称領域についての消滅証明は、領域の型ごとの古典的plethysm計算ではなく、MokのFinsler計量剛性定理に依拠する純幾何的で統一的な方法であり、すべての領域とすべての階数を同時に扱う。

## 原論文との対応

- **Abstractページ:** [arXiv:2401.15852](https://arxiv.org/abs/2401.15852)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.2, 1.3; Corollaries 1.4, 1.5
- **論文構成の説明:** Introduction, pp. 1–3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction

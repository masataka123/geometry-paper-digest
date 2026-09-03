---
layout: paper
title: "Milnor-Wood inequality for klt varieties of general type and uniformization"
title_ja: "一般型 klt 多様体の Milnor–Wood 不等式と一意化"
authors: "Matteo Costantini, Daniel Greb"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.DG
arxiv_abstract: >-
  We generalize the definition of the Toledo invariant for representations of fundamental groups of smooth varieties of general type due to Koziarz and Maubon to the context of singular klt varieties, where the natural fundamental groups to consider are those of smooth loci. Assuming that the rank of the target Lie group is not greater than two, we show that the Toledo invariant satisfies a Milnor-Wood type inequality and we characterize the corresponding maximal representations.
topic: algebraic-geometry
tags:
  - singularities
  - fundamental-groups
  - higgs-nonabelian-hodge
  - uniformization
arxiv_id: "2308.05586v3"
arxiv_url: "https://arxiv.org/abs/2308.05586"
arxiv_submitted: "2023-08-10"
arxiv_updated: "2024-06-05"
summary: >-
  一般型射影 klt 多様体の滑らかな部分の基本群から Hermitian 型 Lie 群への表現に Toledo 不変量を定義し、標的が階数2以下の古典群なら鋭い Milnor–Wood 不等式を証明する。等号成立を、標準モデルが滑らかな複素球商の有限 quasi-étale 商であり、表現の調和写像が全測地的な複素双曲空間を与えることによって特徴づける。
abstract_en: ""
summary_en: >-
  The Toledo invariant is extended from smooth varieties of general type to representations of the fundamental group of the regular locus of a projective klt variety. For classical Hermitian target groups of rank at most two, the paper establishes a sharp Milnor-Wood bound. It also identifies equality with a ball-quotient uniformization of the canonical model and a totally geodesic equivariant harmonic embedding. The proof uses Higgs bundles and nonabelian Hodge theory adapted to singular spaces.
abstract_ja: >-
  滑らかな一般型多様体の基本群表現に対する Toledo 不変量を、特異な klt 多様体の滑らかな部分の基本群へ拡張する。標的 Lie 群の階数が2以下という仮定のもとで Milnor–Wood 型不等式を示し、最大値を取る表現を球商による一意化と全測地的調和写像によって特徴づける。
abstract_source_url: "https://arxiv.org/abs/2308.05586"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **著者**: Matteo Costantini, Daniel Greb
- **arXiv**: [arXiv:2308.05586v3](https://arxiv.org/abs/2308.05586)
- **初回投稿日**: 2023年8月10日
- **更新日**: 2024年6月5日
- **主要カテゴリ**: math.AG
- **ライセンス**: [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Toledo 不変量は Hermitian 型半単純 Lie 群の格子の表現に付随する特性数であり、Milnor–Wood 不等式はその大きさを制御する。Koziarz–Maubon は Higgs 束を用いて、これを滑らかな一般型多様体の基本群へ拡張した。本稿は、極小モデルで自然に現れる klt 特異点を許す。

特異多様体では $X$ 自身ではなく滑らかな部分 $X_{\mathrm{reg}}$ の基本群を使うことが本質的である。実際、滑らかな球商の余次元1で分岐しない有限商には、$\pi_1(X)$ だけでは最大表現を検出できない例がある。

本稿は調和写像から Toledo 不変量を定義し、標的が階数2以下の古典 Hermitian Lie 群である場合に鋭い上界を証明する。等号は標準モデルの球商一意化と表現の全測地的性質を同時に特徴づける。

低階数仮定は等号時の一意化そのものではなく、Higgs 束の半安定性から不等式を導く現在の証明に必要である。著者らはこの仮定が本質的ではないと説明している。

## 背景と問題設定

$X$ を次元 $d\ge2$ の一般型射影 klt 多様体で $K_X$ が nef とし、$\rho:\pi_1(X_{\mathrm{reg}})\to G$ を reductive 表現とする。対応する $\rho$-同変調和写像 $f:(X_{\mathrm{reg}})^u\to Y_G$ と対称空間の Kähler 形式 $\omega_{Y_G}$ を用い、Toledo 不変量を

$$
\tau(\rho)=\frac{1}{4\pi}\int_X f^*(\omega_{Y_G})\wedge c_1(K_X)^{d-1}\in\mathbb Q
$$

と定義する。$K_X$ の bigかつ nef という性質により交叉を特異集合から動かせることが、この積分を正当化する。

## 主結果

### 主定理（Theorem 1.1）

**結論**は次の Milnor–Wood 不等式である。$G$ が $SO^*(10)$ を除く階数 $\operatorname{rk}(G)\le2$ の古典 Hermitian Lie 群なら、

$$
|\tau(\rho)|\le \operatorname{rk}(G)\frac{K_X^d}{d+1}.
$$

等号が成立するための必要十分条件は、$X$ の標準モデル $X_{\mathrm{can}}$ が滑らかな球商 $Z$ の有限群による quasi-étale 商であり、$G=SU(p,q)$、$p\ge qd$ となることである。さらに誘導表現 $\rho_Z$ の同変調和写像は、$Z$ の普遍被覆を $Y_G$ 内の正則または反正則な全測地的複素双曲 $d$ 空間へ固有埋め込みし、その誘導正則断面曲率は $-1/q$ である。

この等号条件は、数値的不変量の最大性を標準モデルの一意化へ変換する。klt 特異点を許しながら、滑らかな部分の基本群が球商構造を正しく保持する点が新規性である。

## 証明の見取り図

Mochizuki の調和計量と、klt 空間へ拡張された Simpson 対応によって表現を Higgs 束へ移す。Milnor–Wood 不等式は Koziarz–Maubon の滑らかな場合の方針に沿い、接束と Higgs 束の適切なテンソル積に半安定性を適用して次数を評価する。

等号の場合は Higgs 場の極限的形を解析し、quasi-étale 被覆を経て滑らかな設定へ移す。そこで全測地的な調和写像と複素球一意化を得て、標準モデルへ降ろす。

## 原論文との対応

本記事は Abstract と Introduction の定義 (1)、Theorem 1.1、および証明概略に基づく。各古典群に対応する Higgs 束、半安定性の詳細、quasi-étale 被覆上での一意化の証明は本文 Section 2–3 に委ねる。

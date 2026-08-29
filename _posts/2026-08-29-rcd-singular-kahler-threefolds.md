---
layout: paper
title: "RCD structures on singular Kahler spaces of complex dimension three"
title_ja: "複素3次元特異Kähler空間のRCD構造"
authors: "Xin Fu, Bin Guo, Jian Song"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AG
  - math.AP
arxiv_abstract: >-
  Let X be a projective variety of complex dimension 3 with log terminal singularities. We prove that every singular Kahler metric on X with bounded Nash entropy and Ricci curvature bounded below induces a compact RCD space homeomorphic to the projective variety X itself. In particular, singular Kahler-Einstein spaces of complex dimension 3 with bounded Nash entropy are compact RCD spaces topologically and holomorphically equivalent to the underlying projective variety. Various compactness theorems are also obtained for 3-dimensional projective varieties with bounded Ricci curvature. Such results establish connections among algebraic, geometric and analytic structures of klt singularities from birational geometry and provide abundant examples of RCD spaces from algebraic geometry via complex Monge-Ampere equations.
topic: differential-geometry
tags:
  - singularities
  - metric-limits
  - kahler-einstein-metrics
  - monge-ampere-equations
arxiv_id: "2503.08865v1"
arxiv_url: "https://arxiv.org/abs/2503.08865"
arxiv_submitted: "2025-03-11"
arxiv_updated: "2025-03-11"
summary: >-
  klt特異点をもつ射影3次元多様体上の特異Kähler計量が定める距離測度空間を扱う。Nash entropyの有界性とRicci曲率の下界から、完備化が元の多様体と同相な非崩壊RCD空間になることを示し、複素解析的特異点と合成的Ricci曲率の橋渡しを与える。
abstract_en: ""
summary_en: >-
  The paper studies metric-measure completions arising from singular Kähler metrics on projective threefolds with log terminal singularities. Under a Nash entropy bound and a lower Ricci bound, the completion is shown to be a non-collapsed RCD space and to recover the topology of the original variety. The result applies in particular to singular Kähler–Einstein metrics and leads to compactness statements for bounded families. It connects the algebraic structure of klt singularities with synthetic lower Ricci curvature.
abstract_ja: >-
  複素3次元のklt射影多様体上で、Nash entropyが有界かつRicci曲率が下から有界な特異Kähler計量を考える。その正則部分の距離完備化は、元の射影多様体と同相なコンパクト非崩壊RCD空間になる。特異Kähler–Einstein計量にも適用され、曲率を制御した3次元射影多様体のコンパクト性定理も導かれる。
abstract_source_url: "https://arxiv.org/abs/2503.08865"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2503.08865v1](https://arxiv.org/abs/2503.08865)
- **著者:** Xin Fu, Bin Guo, Jian Song
- **初回投稿日:** 2025年3月11日
- **最終更新日:** 2025年3月11日
- **主分類・副分類:** math.DG（主分類）, math.AG, math.AP
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

複素Monge–Ampère方程式から得られる特異Kähler計量には、電流としてのRicci曲率と、距離測度空間としての合成的Ricci曲率という二つの記述がある。本論文は、両者がklt特異点をもつ射影多様体上でどのように結び付くかを問う。

正則部分に計量を入れて距離完備化した空間を考える。複素3次元では、Nash entropyの有界性とRicci曲率の下界のもとで、この完備化が非崩壊RCD空間となり、しかも元の射影多様体と同相になる。

したがって、距離完備化が余分な点を生んだり元の位相を失ったりしない。特異Kähler–Einstein計量については、解析的な計量構造、RCD構造、klt多様体の代数的・複素解析的構造が同じ台の上で整合する。

## 背景と問題設定

$X$を正規射影多様体、$X^\circ$を正則部分とする。特異Kähler計量$\omega$から$(X^\circ,\omega)$の距離完備化$(\widehat X,d_\omega)$を作り、$\omega^n$を自明に延長した測度$\mu_\omega$を組み合わせる。Introductionでは、$p>n$に対するNash entropyの制御と

$$
\operatorname{Ric}(\omega)\geq \lambda\omega
$$

を満たす計量のクラスを$\mathrm{RK}(X)$としている。予想1.1は、任意の次元でこの距離測度空間がコンパクトRCD空間となり$X$と同相になるという主張である。

## 主結果

### 一般次元での判定（Theorem 1.1）

$X$がklt特異点をもち、ある特異点解消$\pi:Y\to X$で相対反標準因子$-K_{Y/X}$が有効であり、$\omega\in\mathrm{RK}(X)$とする。このとき$(\widehat X,d_\omega,\mu_\omega)$はコンパクトRCD空間で$X$と同相になり、正則集合は$X^\circ$に一致する。さらに特異集合$S(\widehat X)$は

$$
\dim_H S(\widehat X)\leq 2n-3
$$

を満たし、Ricci曲率に上界もあれば右辺は$2n-4$へ改善される。

### 複素3次元での主定理（Theorem 1.2）

$X$をklt特異点をもつ射影3次元多様体とすると、任意の$\omega\in\mathrm{RK}(X)$が定める$(\widehat X,d_\omega,\mu_\omega)$は$X$と同相な非崩壊RCD空間である。さらに普遍定数$\varepsilon>0$が存在し、任意の特異点$p$で体積密度が

$$
\nu_{\widehat X}(p)\leq 1-\varepsilon
$$

を満たす。この一様な密度ギャップが、計量的特異点とklt特異点の代数的不変量との接点になる。

### Kähler–Einsteinの場合（Corollary 1.1）

$\operatorname{Ric}(\omega_{\mathrm{KE}})=\lambda\omega_{\mathrm{KE}}$を満たす特異Kähler–Einstein計量では、完備化は$X$と同相な$\mathrm{RCD}(\lambda,6)$空間になる。次元3での主定理によりNash entropy仮定はklt条件から確保される。

## 証明の見取り図

Introductionは、Monge–Ampère測度のentropy制御から得られる直径・Sobolev・Green関数・熱核評価をRCD理論へ接続する構図を示す。一般次元では相対反標準因子の有効性を用いて特異集合を制御し、3次元ではklt特異点の接錐の代数性と一意性、体積密度のギャップを組み合わせる。これにより合成的曲率条件だけでなく、完備化と元の多様体との位相的一致まで導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2503.08865](https://arxiv.org/abs/2503.08865)
- **Introduction:** Section 1, pp. 1–6
- **Introduction中で言及された主要定理番号:** Theorem 1.1, Theorem 1.2, Corollary 1.1, Theorem 1.3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction

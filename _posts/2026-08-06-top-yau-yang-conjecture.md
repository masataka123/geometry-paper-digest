---
layout: paper
title: "The top Yau--Yang conjecture for K\"ahler manifolds with positive sectional curvature"
title_ja: "正の断面曲率をもつKähler多様体に対するtop Yau--Yang予想"
authors: "Ved V. Datar, Vamsi P. Pingali, Harish Seshadri"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.CV
topic: differential-geometry
tags:
  - positivity
  - curvature
arxiv_id: "2606.19806v1"
arxiv_url: "https://arxiv.org/abs/2606.19806v1"
arxiv_submitted: "2026-06-18"
arxiv_updated: "2026-06-18"
summary: >-
  正の断面曲率をもつ完備非compact Kähler多様体で、Ricci formのtop wedgeの全質量が有限であることを証明する。曲率が有界なら既知の結果と合わせてquasiprojective性が従う。
abstract_en: >-
  We prove that the top wedge power of the Ricci form of a complete non-compact K\"ahler manifold with positive sectional curvature has finite integral. Using a result of Chen-Zhu, an immediate consequence is the quasiprojectivity of such manifolds under the assumption of bounded sectional curvature. A key new idea to prove B\'ezout estimates along with a Lipschitz weight with finite Monge-Amp\`ere mass is used in the proof of the main result.
summary_en: ""
abstract_ja: >-
  正の断面曲率をもつ完備非compact Kähler多様体について、Ricci formの最高次外積の積分が有限であることを示す。有界断面曲率を加えるとChen--Zhuの結果からquasiprojective性が従う。有限Monge--Ampère質量をもつLipschitz plurisubharmonic weightと新しいBézout型評価が主要な道具である。
abstract_source_url: "https://arxiv.org/abs/2606.19806v1"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2606.19806v1](https://arxiv.org/abs/2606.19806v1)
- **著者:** Ved V. Datar, Vamsi P. Pingali, Harish Seshadri
- **初回投稿日:** 2026年6月18日
- **最終更新日:** 2026年6月18日（v1）
- **主分類・副分類:** Differential Geometry (math.DG); Complex Variables (math.CV)
- **ライセンス:** [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)

## 要約

Yau--Yang問題は、非負の正則二断面曲率をもつ完備Kähler多様体でRicci formの各次数の積分成長を問う。最高次では、全空間上のtop Ricci massの有限性が問題となる。

本論文は正の断面曲率の下で、次元や最大体積成長を仮定せず最高次の場合を解く。さらに正の正則二断面曲率と、有界gradientをもつ強plurisubharmonic exhaustionという仮定でも同じ結論を得る。

この有限性は非compact Kähler多様体の複素代数的compactificationと結び付き、有界曲率の場合のquasiprojective性を直ちに導く。

## 背景と問題設定

一般の問いは、基点 $o$ と距離球 $B(o,r)$ に対して

$$
r^{2k-2n}\int_{B(o,r)}\operatorname{Ric}_\omega^k\wedge\omega^{n-k}
$$

が $r$ に依らず有界か、というものである。本論文は $k=n$、すなわち $\int_X\operatorname{Ric}_\omega^n$ の有限性を扱う。

## 主結果

### top Ricci massの有限性（Theorem 1.1）

正の断面曲率をもつ完備非compact Kähler多様体 $(X^n,\omega)$ では

$$
\int_X\operatorname{Ric}_\omega^n<\infty
$$

である。より一般に、正の正則二断面曲率をもち、一様有界gradientの滑らかな強plurisubharmonic exhaustionを許す場合にも成立する。

### quasiprojective性（Theorem 1.2）

正かつ有界な断面曲率をもつ完備非compact Kähler多様体はquasiprojective多様体にbiholomorphicである。これはTheorem 1.1をChen--Zhuの既知の定理へ入力した帰結である。

## 証明の見取り図

先行研究で構成した一様Lipschitz plurisubharmonic関数 $\varphi$ は

$$
0<\int_X(\sqrt{-1}\partial\bar\partial\varphi)^n<\infty
$$

を満たす。heat flowで滑らかにし、重み付き $L^2$ 法でcanonical bundleの非零正則切断を作る。Poincaré--Lelong型の関係をBedford--Taylor理論で正当化し、linear growth関数と帰納法による新しいBézout型評価でtop Ricci massを制御する。

## 原論文との対応

- **Abstractページ:** [arXiv:2606.19806v1](https://arxiv.org/abs/2606.19806v1)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.1 and 1.2
- **論文構成の説明:** proof overview, pp. 2–3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** Creative Commons Attribution 4.0 International
- **source_scope:** Abstract and Introduction

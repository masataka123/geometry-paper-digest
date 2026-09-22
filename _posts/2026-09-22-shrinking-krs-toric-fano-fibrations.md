---
layout: paper
title: "Shrinking Kähler-Ricci solitons on toric fano fibrations"
title_ja: "トーリックFano fibration上の縮小Kähler–Ricci soliton"
authors: "Tristan C. Collins, Genggeng Huang, Freid Tong, Yulun Xu"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AP
arxiv_abstract: "We prove that a smooth toric Fano fibration admits a complete gradient shrinking Kähler-Ricci soliton."
topic: differential-geometry
tags:
  - kahler-ricci-flow-solitons
  - fano-varieties
  - toric-geometry
  - monge-ampere-equations
  - noncompact-kahler-geometry
arxiv_id: "2609.24884v1"
arxiv_url: "https://arxiv.org/abs/2609.24884"
arxiv_submitted: "2026-09-21"
arxiv_updated: "2026-09-21"
summary: "トーリックFano fibrationに完備なgradient shrinking Kähler–Ricci solitonを構成し、体積成長も決定する。非compact polytope上の実Monge–Ampère方程式に対する新しい局所評価により、Guillemin境界条件と完備性を同時に得る。"
abstract_en: "We prove that a smooth toric Fano fibration admits a complete gradient shrinking Kähler-Ricci soliton."
summary_en: ""
abstract_ja: "滑らかなトーリックFano fibrationが完備gradient shrinking Kähler–Ricci solitonを持つことを証明する。volume minimizing Reeb vector fieldを選ぶとsolitonが存在し、metric ballの体積はbaseの実次元に対応する多項式成長を持つ。証明は非compact polytope上の実Monge–Ampère方程式を有界polytopeで近似し、境界正則性と完備性を確立する。"
abstract_source_url: "https://arxiv.org/abs/2609.24884"
license_name: "CC BY-NC-SA 4.0"
license_url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.24884](https://arxiv.org/abs/2609.24884)
- **著者:** Tristan C. Collins, Genggeng Huang, Freid Tong, Yulun Xu
- **初回投稿日:** 2026-09-21
- **最終更新日:** 2026-09-21
- **主分類・副分類:** math.DG, math.AP
- **ライセンス:** [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## 要約

トーリックFano fibrationに完備なgradient shrinking Kähler–Ricci solitonを構成し、体積成長も決定する。非compact polytope上の実Monge–Ampère方程式に対する新しい局所評価により、Guillemin境界条件と完備性を同時に得る。

滑らかなトーリックFano fibrationが完備gradient shrinking Kähler–Ricci solitonを持つことを証明する。volume minimizing Reeb vector fieldを選ぶとsolitonが存在し、metric ballの体積はbaseの実次元に対応する多項式成長を持つ。証明は非compact polytope上の実Monge–Ampère方程式を有界polytopeで近似し、境界正則性と完備性を確立する。

主結果の仮定と結論を区別し、以下ではAbstractとIntroductionに明記された範囲だけを扱う。後続節の証明を独立に検証したものではない。

## 背景と問題設定

縮小Kähler–Ricci solitonはRicci flowのType I特異点modelであり、非compact Fano fibration上の存在はSun–Zhang予想と結びつく。compactトーリックFanoでは既知の方法がglobal estimateを用いるが、非compactの場合は境界正則性と完備性が新たな障害となる。

## 主結果

### 主定理（Theorem 1.2）

$(\pi:X\to Y,T,\xi)$ を、$\xi$ がvolume minimizing Reeb vector fieldであるトーリックFano fibrationとする。このとき完備なshrinking Kähler–Ricci solitonが存在する。さらに $R\gg1$ で

$$\operatorname{Vol}(B_R(p))\sim R^{\dim_{\mathbb R}Y}$$

が成り立つ。soliton方程式の正規化は

$$\operatorname{Ric}(\omega)+\sqrt{-1}\,\partial\bar\partial f=\omega$$

である。

## 証明の見取り図

moment polytope $P$ 上の凸函数に対する実Monge–Ampère方程式へ還元し、$P$ を有界polytope $P_R$ で近似する。Legendre変換したpotentialの局所一様 $C^2$ 評価と、faceの余次元に関する帰納法による重み付き $C^{1,1}$ 評価を作る。Evans–Krylov型評価からGuillemin境界条件を極限へ渡し、inverse HessianのReeb方向成長を制御して完備性を示す。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.24884](https://arxiv.org/abs/2609.24884)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Conjecture 1.1; Theorem 1.2
- **確認したarXivバージョン:** 2609.24884v1
- **確認したライセンス:** [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
- **source_scope:** Abstract and Introduction

---
layout: paper
title: "Divisorial Rigidity and Regularity of Boundary Cases for the Supercritical LYZ Equation"
title_ja: "超臨界LYZ方程式の境界場合における因子的剛性と正則性"
authors: "Jixiang Fu, Shing-Tung Yau, Dekai Zhang, Ziyi Zhang"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: "We study the supercritical LYZ equation on compact Kähler manifolds at the boundary of stability. Under numerical semistability, we prove a quantitative positivity estimate on the modified nef cone. It implies that the destabilizing prime divisors form a finite exceptional family. Assuming the existence of a smooth semisubsolution, we prove that the associated intersection form is negative definite on the span of classes of these divisors. Using this rigidity, we then construct a logarithmic singular subsolution along their union and obtain a bounded Bedford--Taylor solution which is smooth on its complement."
topic: differential-geometry
tags:
  - positivity
  - pluripotential-theory
arxiv_id: "2609.25553v1"
arxiv_url: "https://arxiv.org/abs/2609.25553"
arxiv_submitted: "2026-09-22"
arxiv_updated: "2026-09-22"
summary: "数値的半安定性の境界にある超臨界LYZ方程式について、修正nef錐上の定量的正値性と不安定化素因子の有限性を示す。滑らかな半劣解を仮定すると、それらの因子の外で滑らかな有界Bedford–Taylor解を構成する。"
abstract_en: ""
summary_en: "This work treats the supercritical Leung–Yau–Zaslow equation when numerical stability reaches its boundary. It derives uniform positivity on modified nef classes and shows that the prime divisors attaining equality form a finite exceptional set. With a smooth semisubsolution, their intersection form is negative definite, enabling a logarithmically singular barrier and a bounded weak solution that is smooth away from those divisors."
abstract_ja: "コンパクトKähler多様体上の超臨界Leung–Yau–Zaslow方程式を、数値的安定性が等号に達する境界で研究する。修正nef類に対する一様な正値性から、不安定化素因子が有限な例外族をなすことを証明する。さらに滑らかな半劣解の存在下で因子類上の交叉形式の負定値性を得て、因子の合併に沿う対数特異劣解を作る。その結果、全体で有界であり合併の外では滑らかなBedford–Taylor解が得られる。"
abstract_source_url: "https://arxiv.org/abs/2609.25553"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.25553](https://arxiv.org/abs/2609.25553)
- **著者:** Jixiang Fu, Shing-Tung Yau, Dekai Zhang, Ziyi Zhang
- **初回投稿日:** 2026-09-22
- **最終更新日:** 2026-09-22
- **主分類・副分類:** math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

数値的半安定性の境界にある超臨界LYZ方程式について、修正nef錐上の定量的正値性と不安定化素因子の有限性を示す。滑らかな半劣解を仮定すると、それらの因子の外で滑らかな有界Bedford–Taylor解を構成する。

コンパクトKähler多様体上の超臨界Leung–Yau–Zaslow方程式を、数値的安定性が等号に達する境界で研究する。修正nef類に対する一様な正値性から、不安定化素因子が有限な例外族をなすことを証明する。さらに滑らかな半劣解の存在下で因子類上の交叉形式の負定値性を得て、因子の合併に沿う対数特異劣解を作る。その結果、全体で有界であり合併の外では滑らかなBedford–Taylor解が得られる。

以下はAbstractとIntroductionに明記された主張と証明方針の範囲を整理したものであり、後続節の証明を独立に検証したものではない。

## 背景と問題設定

コンパクトKähler多様体上の超臨界Leung–Yau–Zaslow方程式を、数値的安定性が等号に達する境界で研究する。Introductionは従来結果の到達点と、本論文が解く未解決部分を区別して位置付ける。

## 主結果

### 定量的正値性（Theorem 1.3）

数値的半安定性条件 (1.6) の下で、ある $c>0$ が存在し、任意の修正nef類 $\beta$ に対して

$$\int_M G_{n-1,\theta}(\chi)\wedge\beta\ge c\int_M\omega^{n-1}\wedge\beta$$

が成り立つ。この閾値より小さい素因子の族は例外族で、Picard数以下の有限個である。

### 因子的剛性と弱解（Theorems 1.4 and 1.6）

滑らかな半劣解を仮定すると、$G_{n-2,\theta}(\chi)$ が定める二次形式は不安定化素因子類の張る空間上で負定値となる。その合併を $Z$ とすれば、有界な準多重劣調和関数 $u_\infty$ が存在し、LYZ方程式をBedford–Taylorの意味で満たし、$M\setminus Z$ 上では滑らかである。

## 証明の見取り図

Yauの定理でtesting classに適合する体積形式を選び、twisted LYZ方程式と点ごとの不等式から修正nef錐上の評価を得る。Boucksomの例外族理論とHodge型不等式で負定値性を示し、対数特異劣解を用いる一様評価と極限操作によって弱解を構成する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.25553](https://arxiv.org/abs/2609.25553)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorems 1.3, 1.4, 1.6; Proposition 1.5
- **確認したarXivバージョン:** 2609.25553v1
- **確認したライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction

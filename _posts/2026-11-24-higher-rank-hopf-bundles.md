---
layout: paper
title: Higher rank bundles on Hopf surfaces
title_ja: Hopf曲面上の高階数束と跳躍ファイバー
authors: Edoardo Ballico, Elizabeth Gasparim
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: "We prove the existence of filtrable stable bundles on the Hopf surface with any rank and $c_2>0$, and show they must have jumps. In the opposite direction, for each integer $r\\ge 2$ we prove the existence of irreducible rank $r$ vector bundles on $X$ with trivial determinant, $c_2=1$, and no jumps.\n  We apply codimension $2$ operations to elements of the moduli space $\\mathcal M_{r,n}$ of rank $r$ stable vector bundles with $c_2=n$ on the Hopf surface, obtaining families of torsion free sheaves in the closure of $\\mathcal M_{r,n+1}$ when $c_2>1$."
topic: algebraic-geometry
tags:
- vector-bundles-sheaves
- stability
- chern-classes
- moduli
arxiv_id: 2602.06936v2
arxiv_url: https://arxiv.org/abs/2602.06936
arxiv_submitted: '2026-02-06'
arxiv_updated: '2026-11-20'
summary: 古典的Hopf曲面上で、任意の階数二以上と任意の正の第二Chern数に対して、行列式が自明な安定かつフィルター可能な束を構成する。これらは跳躍ファイバーを持つが、同じ曲面には第二Chern数一で跳躍のない既約束も存在する。
abstract_en: "We prove the existence of filtrable stable bundles on the Hopf surface with any rank and $c_2>0$, and show they must have jumps. In the opposite direction, for each integer $r\\ge 2$ we prove the existence of irreducible rank $r$ vector bundles on $X$ with trivial determinant, $c_2=1$, and no jumps.\n  We apply codimension $2$ operations to elements of the moduli space $\\mathcal M_{r,n}$ of rank $r$ stable vector bundles with $c_2=n$ on the Hopf surface, obtaining families of torsion free sheaves in the closure of $\\mathcal M_{r,n+1}$ when $c_2>1$."
summary_en: ''
abstract_ja: 楕円ファイバーへの制限の半安定性は、曲面上での束の安定性とは別に変化し得る。著者らは二種類の束を構成してこの差を示し、点で束を変更する操作によって、安定束のモジュライの境界に現れる捩れなし層を記述する。
abstract_source_url: https://arxiv.org/abs/2602.06936
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2602.06936v2](https://arxiv.org/abs/2602.06936)
- **著者:** Edoardo Ballico, Elizabeth Gasparim
- **初回投稿日:** 2026-02-06
- **最終更新日:** 2026-11-20
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

楕円ファイブレーションを持つ古典的Hopf曲面で、高階数束の安定性を各ファイバーへの制限から調べる。制限の半安定性が破れるファイバーが跳躍ファイバーである。

フィルター可能な束では、第二Chern数が正なら跳躍を避けられない。著者らはこの場合の安定束を任意の正の第二Chern数で構成する。

一方、フィルター可能性を外すと、第二Chern数がすでに一であっても全ファイバーで半安定な制限を持ち得る。

## 背景と問題設定

局所自由な安定束の極限が再び束になるとは限らない。著者らは点に集中するインスタントンの代数幾何的な対応物として、局所自由性を失った捩れなし層を捉える。

## 主結果

### フィルター可能な場合（Theorems 3.9・3.19）

古典的Hopf曲面 $X$ 上のフィルター可能な束 $E$ は $c\_2(E)>0$ なら跳躍を持つ。任意の整数 $r\ge2$ と $c>0$ に対し、
$$
\mathrm{rk}(E)=r,\qquad \det E\simeq\mathcal O\_X,\qquad c\_2(E)=c
$$
を満たす安定かつフィルター可能な束が存在する。

### 跳躍のない束（Theorem 4.12）

各 $r\ge2$ に対して、行列式が自明で $c\_2=1$ の既約な階数 $r$ の束が存在し、各楕円ファイバーへの制限は半安定である。

### モジュライの境界（Theorem 5.6）

$c\_2=n>1$ の束から余次元二の操作で得た捩れなし層の族は、第二Chern数 $n+1$ の安定束のモジュライの閉包に現れる。

## 証明の見取り図

論文はフィルター可能な束と既約束を別々に構成し、ファイバーへの制限を比較する。境界の議論では束を点で変更して捩れなし層を作り、それらが局所自由な束の極限になることを示す。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2602.06936)
- **Introduction:** [PDF](https://arxiv.org/pdf/2602.06936v2) — §1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorems 3.9, 3.19, 4.12, 5.6
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2602.06936v2
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction

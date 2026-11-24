---
layout: paper
title: Noncompactifiable Kähler threefolds with positive Ricci curvature
title_ja: 正のRicci曲率を持ち解析的コンパクト化を許さないKähler三次元多様体
authors: Gang Liu, Bo Zhu
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We construct a complete Kähler threefold $(M,ω)$ with positive Ricci curvature and infinite-dimensional third rational homology. It admits no analytic compactification, answering Yau's compactification question negatively (see \cite{Yau1992}, Problem~71, p.~304). The metric is obtained by solving a complex Monge--Ampère equation on an affine threefold and lifting the solution to an infinite cyclic cover. Its Ricci form $ρ_ω$ satisfies $\int_Mρ_ω^3=\infty$, disproving the top Yang--Yau conjecture.
topic: differential-geometry
tags:
- noncompact-kahler-geometry
- curvature
- monge-ampere-equations
arxiv_id: 2611.25716v2
arxiv_url: https://arxiv.org/abs/2611.25716
arxiv_submitted: '2026-11-19'
arxiv_updated: '2026-11-20'
summary: 正のRicci曲率を持つ完備Kähler三次元多様体で、第三有理ホモロジーが無限次元となる例を構成する。解析的コンパクト化が存在せず、最高次のRicci積分も発散するため、一つの例が二つの予想への反例となる。
abstract_en: We construct a complete Kähler threefold $(M,ω)$ with positive Ricci curvature and infinite-dimensional third rational homology. It admits no analytic compactification, answering Yau's compactification question negatively (see \cite{Yau1992}, Problem~71, p.~304). The metric is obtained by solving a complex Monge--Ampère equation on an affine threefold and lifting the solution to an infinite cyclic cover. Its Ricci form $ρ_ω$ satisfies $\int_Mρ_ω^3=\infty$, disproving the top Yang--Yau conjecture.
summary_en: ''
abstract_ja: 著者らはアフィン三次元多様体上で体積形式を指定して完備計量を作り、その無限巡回被覆に引き戻す。正のRicci曲率は被覆に保たれる一方、退化するファイバーの上には独立な三次元サイクルが無限個現れる。
abstract_source_url: https://arxiv.org/abs/2611.25716
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.25716v2](https://arxiv.org/abs/2611.25716)
- **著者:** Gang Liu, Bo Zhu
- **初回投稿日:** 2026-11-19
- **最終更新日:** 2026-11-20
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

完備な非コンパクトKähler多様体が正のRicci曲率を持つとき、コンパクトKähler多様体から解析的部分集合を除いた形で表せるか。これはYauのコンパクト化問題である。

本論文の反例は複素三次元で、特に第三有理ホモロジーが無限次元となる。この性質のため、コンパクトな複素多様体の解析的Zariski開集合として実現することすらできない。

同じ計量のRicci形式の三乗の全積分も無限大になる。これにより、非負Ricci曲率のもとで最高次の積分の有限性を予想したYang–Yauの主張にも反例が得られる。

## 背景と問題設定

体積成長や曲率の減衰などを追加で仮定すれば準射影性を与える結果がある。ここで問題となるのはRicci曲率の正値性だけから無限遠の位相や曲率の総量を制限できるかである。

## 主結果

### 正のRicci形式を持つ計量（Theorem 1.4）

$\sum\_{j=1}^3 z\_j^2=u+u^{-1}$ で定義した $X\subset\mathbb C^\times\times\mathbb C^3$ 上に滑らかな完備計量が存在する。$\Omega$ を自然な正則留数形式、$D=(1+|z|^2)^2+|u-u^{-1}|^2$ とすると
$$
\omega^3=\frac{6i^9\Omega\wedge\bar\Omega}{\sqrt D},\qquad
\rho\_\omega=\frac{i}{2}\partial\bar\partial\log D>0.
$$

### 反例を与える被覆（Corollaries 1.5–1.6）

$\sum\_{j=1}^3 Z\_j^2=\sin w$ で定まる $M\subset\mathbb C^3\times\mathbb C$ は $X$ の連結無限巡回被覆である。引き戻し計量は完備で、正のRicci曲率と
$$
\dim\_{\mathbb Q}H\_3(M;\mathbb Q)=\infty,\qquad \int\_M\rho\_{\omega\_M}^3=\infty
$$
を同時に持つ。積を取ることで高次元にも例が得られる。

## 証明の見取り図

まず外側のモデルとファイバー上のポテンシャルを貼り合わせ、Heinの非コンパクトMonge–Ampère方程式の存在定理を適用する。被覆上では正弦関数の隣り合う零点の間でファイバー内の二次元球が閉じて三次元球を作る。交点対でそれらの独立性を検出する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.25716)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.25716v2) — §1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorem 1.4, Corollaries 1.5–1.6
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.25716v2
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction

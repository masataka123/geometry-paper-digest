---
layout: paper
title: On pluriclosed torsion-critical Hermitian metrics
title_ja: 捩率エネルギーの臨界性がKähler性を導く条件
authors: Dongmei Zhang, Yuqin Goo
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: In our previous work, we studied the squared $L^2$-norm functionals $\mathcal G$ of Gauduchon's torsion $1$-form and $\mathcal F$ of the Chern torsion over the space of all Hermitian metrics with unit volume on a compact complex manifold. We introduced torsion-critical metrics as critical points of $\mathcal F$. In this paper, We prove that a pluriclosed and astheno-Kähler metric is torsion-critical if and only if it is Kähler. In particular, every compact pluriclosed torsion-critical Hermitian threefold is Kähler. We also give explicit examples and derive geometric consequences under additional curvature assumptions.
topic: differential-geometry
tags: []
arxiv_id: 2611.23800v1
arxiv_url: https://arxiv.org/abs/2611.23800
arxiv_submitted: '2026-11-18'
arxiv_updated: '2026-11-18'
summary: コンパクト複素多様体上でChern捩率のエネルギーが停留する計量を調べる。pluriclosed条件とastheno-Kähler条件を併せると臨界計量はKählerとなり、複素三次元では前者だけで足りる。
abstract_en: In our previous work, we studied the squared $L^2$-norm functionals $\mathcal G$ of Gauduchon's torsion $1$-form and $\mathcal F$ of the Chern torsion over the space of all Hermitian metrics with unit volume on a compact complex manifold. We introduced torsion-critical metrics as critical points of $\mathcal F$. In this paper, We prove that a pluriclosed and astheno-Kähler metric is torsion-critical if and only if it is Kähler. In particular, every compact pluriclosed torsion-critical Hermitian threefold is Kähler. We also give explicit examples and derive geometric consequences under additional curvature assumptions.
summary_en: ''
abstract_ja: Chern捩率はKähler性からのずれを測るが、そのエネルギーの停留だけでは捩率の消滅は従わない。著者らは捩率とそのトレースのエネルギーを比較し、二つの微分条件の下で第一変分まで一致する関係を導く。
abstract_source_url: https://arxiv.org/abs/2611.23800
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.23800v1](https://arxiv.org/abs/2611.23800)
- **著者:** Dongmei Zhang, Yuqin Goo
- **初回投稿日:** 2026-11-18
- **最終更新日:** 2026-11-18
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

Kähler計量ではChern接続の捩率が消える。したがって捩率の二乗積分は最小になるが、一般のHermite計量の中には、捩率が消えずにこの汎関数が停留する例もある。

論文が調べるのは、複素構造を固定し、すべてのHermite計量の変分を許したときの臨界点である。計量に課す二つの微分条件が、エネルギーの値とその第一変分をそれぞれ制御する。

複素三次元ではこの二条件が同じ式になる。そのためpluriclosedな計量について、捩率臨界性だけでKähler性を判定できる。

## 背景と問題設定

基本形式を $\omega$、複素次元を $n$、体積を $V$、Chern捩率を $T$ とする。対象の汎関数は $F(g)=V^{(1-n)/n}\int\_M |T|^2\thinspace dv$ である。捩率のトレースであるGauduchon形式 $\eta$ の同じ正規化の二乗積分を $G(g)$ とする。

## 主結果

### 二つの微分条件の下での特徴付け（Theorem 1.1）

コンパクトで $n\ge3$ とする。基本形式が

$$
\partial\bar\partial\omega=0,\qquad
\partial\bar\partial\omega^{n-2}=0
$$

を満たすとき、$F$ の臨界点であることと、$g$ がKählerであることは同値である。曲率や等質性の仮定は要しない。

### 複素三次元（Corollary 1.2）

$n=3$ では $\omega^{n-2}=\omega$ であるから、コンパクト複素三次元多様体上で、pluriclosedかつ捩率臨界であることはKähler性と同値になる。$n\ge4$ で第二条件を取り除けるかは、この議論では未解決である。

## 証明の見取り図

恒等式

$$
F(g)-2G(g)=\frac{2V^{(1-n)/n}}{(n-2)!}\int\_M i\partial\bar\partial\omega\wedge\omega^{n-2}
$$

により、第一条件の下で両辺のエネルギー値を比較できる。変分後に部分積分すると第二条件が残りの項を消すため、$DF=2DG$ も得られる。$G$ の臨界点はbalancedであり、$\eta=0$ となる。そこで値の等式に戻ると $F=0$、すなわち捩率そのものの消滅が従う。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.23800)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.23800v1) — §1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorem 1.1, Corollary 1.2, equations (1.3)–(1.6)
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.23800v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction

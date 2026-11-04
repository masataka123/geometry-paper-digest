---
layout: paper
title: Limiting properties of Hermitian-Einstein metrics under variation of the Kähler class
title_ja: Kähler類の変化に伴うHermitian–Einstein計量の極限
authors: Nikita Klemyatin
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AP
- math.CV
arxiv_abstract: We study the behaviour of Hermitian-Einstein metrics on a holomorphic vector bundle over a compact K\"ahler manifold, as the underlying K\"ahler metric varies and its K\"ahler class changes. In particular, if the bundle stops being stable at some point, the Hermitian-Einstein metrics blow up, and their rescaling can be used to construct a destabilizing subsheaf, following the argument of Uhlenbeck and Yau. Furthermore, we study the behaviour of Chern connections of these metrics, and show, that after passing to a subsequence, and applying suitable gauge transforms these connections converge, and identify the blow-up locus of their Uhlenbeck limit.
topic: differential-geometry
tags:
- hermite-einstein-metrics
- stability
- vector-bundles-sheaves
arxiv_id: 2611.03025v1
arxiv_url: https://arxiv.org/abs/2611.03025
arxiv_submitted: '2026-11-02'
arxiv_updated: '2026-11-02'
summary: 安定性の壁へKähler類を動かすとき、Hermitian–Einstein計量の発散が束のどの代数的情報を捉えるかを調べる。極限の半安定性、Seshadri次数付き層の反射包としての接続極限、解析的・代数的特異集合の一致を示す。接続の収束には背景計量の曲率に関する追加の一様評価を課す。
abstract_en: We study the behaviour of Hermitian-Einstein metrics on a holomorphic vector bundle over a compact K\"ahler manifold, as the underlying K\"ahler metric varies and its K\"ahler class changes. In particular, if the bundle stops being stable at some point, the Hermitian-Einstein metrics blow up, and their rescaling can be used to construct a destabilizing subsheaf, following the argument of Uhlenbeck and Yau. Furthermore, we study the behaviour of Chern connections of these metrics, and show, that after passing to a subsequence, and applying suitable gauge transforms these connections converge, and identify the blow-up locus of their Uhlenbeck limit.
summary_en: ''
abstract_ja: Kähler類によって束の傾き安定性は変化する。本論文は安定な側から壁へ近づくHermitian–Einstein計量を正規化し、その有界性と発散を極限類に関する安定性・真の半安定性に結びつける。背景曲率を制御できる場合には、接続の極限をSeshadri次数付き層の反射包と同定し、泡の解析的特異集合と代数的特異集合を重複度も含めて比較する。
abstract_source_url: https://arxiv.org/abs/2611.03025
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.03025v1](https://arxiv.org/abs/2611.03025)
- **著者:** Nikita Klemyatin
- **初回投稿日:** 2026-11-02
- **最終更新日:** 2026-11-02
- **主分類・副分類:** math.DG（主分類）; math.AP, math.CV
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

正則ベクトル束の安定性は、束だけでなく傾きを定めるKähler類にも依存する。ある類に関して安定な束でも、類を動かして安定性の壁へ到達すると、同じ傾きをもつ部分層が現れ得る。本論文は、この代数的変化をHermitian–Einstein計量の極限から取り出すことを目指す。

著者は、壁に向かう背景Kähler計量とそれに対応するHermitian–Einstein計量を考える。基準計量との比を適切に正規化すると、その跡が一様有界な場合には極限でも束は安定であり、非有界な場合には真に半安定となる。後者では、発散を再正規化する操作が安定性を妨げる部分層への射影を生む。

さらに背景曲率が一様に抑えられると、Chern接続は特異集合の外で部分列収束する。その極限は任意の別の束ではなく、元の束のSeshadri次数付き層を反射包にしたものと同定される。解析的な泡の位置と代数的特異点の位置も一致し、余次元2では重複度まで対応する。

この結果は、次数付き層が局所自由であることや、その自己同型群が可換であることを要求した先行研究の制約を取り除く。安定性の壁を越える際の計量の振る舞いを、層の退化と直接結びつける点が中心である。

## 背景と問題設定

$X$を複素次元$n$のコンパクトKähler多様体とし、$\omega\_s$は$s\in(0,1]$で滑らかに変化し、$\omega\_0$へ一様収束するKähler計量とする。一様な定数$C$に対して

$$
C^{-1}\omega\_0\leq\omega\_s\leq C\omega\_0
$$

を仮定する。固定した階数$r$の正則束$E$はすべての$s>0$で$\omega\_s$安定とする。対応する滑らかなHermitian–Einstein計量$H\_s$は

$$
\sqrt{-1}\Lambda\_{\omega\_s}F\_{H\_s}=\mu\_{\omega\_s}(E)\operatorname{Id}
$$

を満たす。相対的な自己準同型$h\_s=H\_1^{-1}H\_s$には

$$
\int\_X\log\det h\_s\thinspace \omega\_s^n=0
$$

という正規化を課す。これは計量の定数倍という自由度を固定するための条件である。Kobayashi–Hitchin対応は各$s>0$で計量の存在を与えるが、壁での極限の構造はそれだけでは決まらない。

## 主結果

### 主定理（Theorem 1.1）

正規化した$\operatorname{Tr}h\_s$が一様有界ならば、$E$は$\omega\_0$安定である。非有界ならば$E$は真に$\omega\_0$半安定であり、$\omega\_0$に関する安定性を妨げる部分層$\mathcal F$への射影は

$$
\operatorname{Id}-\left(\frac{h\_s}{\sup\_X\operatorname{Tr}h\_s}\right)^\sigma
$$

という自己準同型の弱極限を用いて構成される。ここで非有界性は極限で不安定になることを意味するのではなく、安定から半安定へ移ることを検出する。

$\operatorname{Rm}(\omega\_s)$に一様上界を追加すると、ある部分列のChern接続は適切なゲージ変換の後、$X\setminus Z\_{\mathrm{an}}$上の$L^p\_{1,\mathrm{loc}}$で弱収束する。ただし$p>2n$である。背景曲率の$C^k$評価もあれば$C^k\_{\mathrm{loc}}$収束となる。極限束は$X$全体へ反射的連接層として延長され、

$$
E\_\infty\cong\left(\operatorname{Gr}^{S}\_{\omega\_0}(E)\right)^{\ast\ast}
$$

が成り立つ。右辺はSeshadri filtrationの次数付き層の反射包である。

同じ仮定の下で$Z\_{\mathrm{an}}$は解析的部分集合であり、次数付き層から定まる代数的特異集合$Z\_{\mathrm{alg}}$と一致する。余次元2の既約成分に付く解析的・代数的重複度も一致する。したがって極限の層だけでなく、失われた局所的な曲率の集中も代数幾何的に記述される。

## 証明の見取り図

Introductionでは、Uhlenbeck–Yau型の再正規化から部分層を取り出す議論と、接続のコンパクト性を組み合わせる方針が説明される。計量が発散するときには、相対自己準同型の弱極限によって射影を得る。接続の極限をSeshadri次数付き層と比較し、その特異集合と泡の重複度を解析的に同定することで、計量の退化を代数的退化へ結びつける。

安定性に関する最初の二つの主張にはbalancedまたはGauduchon計量への拡張も述べられている。ただし、特異集合の解析性まで含むKählerの場合の結論を、そのまま一般の非Kähler設定に主張しているわけではない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.03025)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.03025v1) — Section 1, pp. 1–6
- **Introduction中で言及された主要結果:** Theorem 1.1
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.03025v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction

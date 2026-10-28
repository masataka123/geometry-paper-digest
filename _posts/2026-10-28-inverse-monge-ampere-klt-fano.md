---
layout: paper
title: The inverse Monge--Ampère flow on klt Fano varieties
title_ja: klt Fano多様体上の逆Monge–Ampère流
authors: Jianchun Chu, Tamás Darvas, Yaxiong Liu
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.AP
- math.DG
arxiv_abstract: We establish the long time existence of the inverse Monge--Amp\`ere flow on a klt $\mathbb{Q}$-Fano variety $X$. We further prove that $X$ admits a K\"ahler--Einstein metric if and only if the flow converges in $L^1$.
topic: several-complex-variables
tags:
- fano-varieties
- singularities
- kahler-einstein-metrics
- monge-ampere-equations
- pluripotential-theory
arxiv_id: 2610.36414v1
arxiv_url: https://arxiv.org/abs/2610.36414
arxiv_submitted: '2026-10-26'
arxiv_updated: '2026-10-26'
summary: klt特異点を持つFano多様体上で、Ding汎関数の勾配流である逆Monge–Ampère流を構成する。滑らかな初期ポテンシャルからの長時間存在と一意性を示し、Kähler–Einstein計量の存在を流のL¹収束によって特徴づける。
abstract_en: ''
summary_en: The authors use a dynamical procedure to approach canonical metrics on singular Fano spaces. They construct a weak inverse Monge–Ampère evolution that remains continuous across the singular set and smooth in space on the regular locus. Its asymptotic behavior detects the existence of a Kähler–Einstein metric. Resolution-based estimates are combined with the metric geometry of finite-energy potentials to control this evolution.
abstract_ja: klt Q-Fano多様体に対し、逆Monge–Ampère流を特異点を含む空間全体で連続な弱い流として構成する。任意の滑らかなKählerポテンシャルを初期値として解は一意に全時間存在する。さらに流がL¹で連続なポテンシャルに収束することとKähler–Einstein計量が存在することが同値であり、収束した場合の極限計量は正則部分で滑らかである。
abstract_source_url: https://arxiv.org/abs/2610.36414
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.36414v1](https://arxiv.org/abs/2610.36414)
- **著者:** Jianchun Chu, Tamás Darvas, Yaxiong Liu
- **初回投稿日:** 2026-10-26
- **最終更新日:** 2026-10-26
- **主分類・副分類:** math.CV（主分類）; math.AP, math.DG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Fano多様体上でKähler–Einstein計量を探す方法の一つは、エネルギーを減少させる流を動かし、その極限を調べることである。本論文はDing汎関数の逆Monge–Ampère流を、klt特異点を持つ場合に構成する。

流は正則部分では空間方向に滑らかであり、特異点を含む空間全体では連続性を持つ。この正則性を保ったまま任意の時間まで解を延長し、一意性も証明する。滑らかなFanoの場合の理論を、退化した方程式を扱う必要のある特異空間へ広げる結果である。

長時間存在だけでは収束は保証されない。論文は、Kähler–Einstein計量が存在することと、この流がL¹で収束することを同値として示す。存在しない場合まで収束を主張するものではなく、正準計量の存在問題を流の漸近挙動へ移す定理である。

## 背景と問題設定

$X$を正規な射影klt多様体で$-K\_X$がampleな$\mathbb Q$-Cartier因子であるものとする。十分可除な$p$による反標準埋め込み$\iota$を用い、$\omega=p^{-1}\iota^\ast\omega\_{\mathrm{FS}}$を固定する。$dd^c=\frac{i}{2\pi}\partial\bar\partial$とし、$\omega\_u=\omega+dd^cu$と書く。

$\mu$を反標準束に付随する適合測度、$E$をMonge–Ampèreエネルギーとすると、Ding汎関数は

$$
D(u)=-E(u)+L(u),\qquad L(u)=-\log\int\_X e^{-u}\thinspace d\mu
$$

である。その有限エネルギー空間上の最小点とKähler–Einstein解の対応は既知の結果であり、本論文はそれを勾配流の立場から調べる。

## 主結果

### 長時間存在と一意性（Theorem 1.1(i)）

任意の$u\_0\in\mathcal H\_\omega$について、逆Monge–Ampère方程式

$$
\frac{1}{V\_\omega}(1-\dot u)(\omega+dd^cu)^n=e^{-u+L(u)}\mu,
\qquad u|\_{t=0}=u\_0
$$

の解が$X\times[0,\infty)$上で一意に存在する。ここで$V\_\omega=\int\_X\omega^n$であり、方程式は$X\_{\mathrm{reg}}\times(0,\infty)$で解釈する。各$u\_t$は$\omega$-pshで、解は全空間で連続、正の時間では時間方向に局所Lipschitz、正則部分では空間方向に滑らかで時間方向に$C^1$である。

### 正準計量の存在と収束（Theorem 1.1(ii)）

次の二条件は同値である。

- $X$はKähler–Einstein計量を持つ。
- 連続な$\omega$-psh関数$u\_\infty$が存在し、$t\to\infty$で$u\_t\to u\_\infty$が$L^1(X)$で成立する。

この場合、極限は正則部分で滑らかで、

$$
\operatorname{Ric}(\omega\_{u\_\infty})=\omega\_{u\_\infty}\quad\text{on }X\_{\mathrm{reg}}
$$

を満たす。Introductionは特異FanoのK安定性による存在判定との関連を既知の背景として挙げるが、本論文自体は代数的帰結を追究しないと述べている。

## 証明の見取り図

対数解消上に方程式を引き戻し、摂動した放物型問題を解く。摂動パラメータに依存しない事前評価が、特異空間への極限と長時間存在を支える。

一意性と収束には、Mayer–Streetsの負勾配流理論を用いる。有限エネルギーポテンシャル空間$\mathcal E^2\_\omega$のCAT(0)幾何と結び付けることで、局所的な微分方程式の評価と大域的な汎関数の凸性を接続する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.36414)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.36414v1) — Section 1, pp. 1–3（Section 2の前まで）
- **Introduction中で言及された主要結果:** Theorem 1.1；equations (1.1)–(1.3)
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.36414v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
